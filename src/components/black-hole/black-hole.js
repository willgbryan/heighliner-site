import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { CameraDragControls } from "./camera/CameraDragControls";
import { Observer } from "./camera/Observer";
import vertexShader from './vertexShader.glsl';
import fragmentShader from './fragmentShader.glsl';

// Modified createConfigGUI function that only returns config objects
const createConfigGUI = () => {
  const performanceConfig = {
    resolution: 1.0,
    quality: 'medium'
  };

  const bloomConfig = {
    strength: 1.0,
    radius: 0.5,
    threshold: 0.6
  };

  const cameraConfig = {
    distance: 10,
    orbit: false,
    fov: 90.0
  };

  const effectConfig = {
    lorentz_transform: true,
    accretion_disk: true,
    use_disk_texture: false,
    doppler_shift: true,
    beaming: true
  };

  return {
    performanceConfig,
    bloomConfig,
    effectConfig,
    cameraConfig
  };
};

const BlackHole = ({ scrollPosition }) => {
  const canvasRef = useRef(null);
  const observerRef = useRef(null);
  const rendererRef = useRef(null);
  const composerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const uniformsRef = useRef(null);
  const configRef = useRef(null);

  const initializeScene = useCallback(() => {
    try {
      if (!canvasRef.current) {
        return null;
      }

      const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
      renderer.setSize(window.innerWidth, window.innerHeight);
      rendererRef.current = renderer;

      const scene = new THREE.Scene();
      sceneRef.current = scene;
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      cameraRef.current = camera;

      const composer = new EffectComposer(renderer);
      composerRef.current = composer;
      const renderPass = new RenderPass(scene, camera);
      const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
      composer.addPass(renderPass);
      composer.addPass(bloomPass);

      const observer = new Observer(60, window.innerWidth / window.innerHeight, 0.1, 1000);
      observerRef.current = observer;
      observer.distance = 10;
      observer.position.set(0, 0, observer.distance);
      observer.setDirection(0, 0);
      const cameraControl = new CameraDragControls(observer, canvasRef.current);

      const textureLoader = new THREE.TextureLoader();
      const diskTexture = textureLoader.load('/accretion_disk.png');
      const bgTexture = textureLoader.load('')

      const uniforms = {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        cam_pos: { value: new THREE.Vector3() },
        cam_dir: { value: new THREE.Vector3() },
        cam_up: { value: new THREE.Vector3() },
        fov: { value: 60 },
        cam_vel: { value: new THREE.Vector3() },
        accretion_disk: { value: true },
        use_disk_texture: { value: true },
        doppler_shift: { value: true },
        lorentz_transform: { value: true },
        beaming: { value: true },
        disk_texture: { value: diskTexture },
        bg_texture: { value: bgTexture },
        bg_offset: { value: new THREE.Vector2(0, 0) },
      };
      uniformsRef.current = uniforms;

      const material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
      });

      const geometry = new THREE.PlaneGeometry(2, 2);
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      // Get config objects without creating GUI
      const config = createConfigGUI();
      configRef.current = config;

      return { renderer, scene, camera, composer, observer, cameraControl, bloomPass, uniforms };
    } catch (error) {
      console.error('Error in initializeScene:', error);
      return null;
    }
  }, []);

  const animate = useCallback(() => {
    try {
      const animationFrame = () => {
        requestAnimationFrame(animationFrame);
        
        if (!observerRef.current || !uniformsRef.current || !configRef.current || !composerRef.current) {
          return;
        }

        const uniforms = uniformsRef.current;
        const observer = observerRef.current;
        const { effectConfig, bloomConfig, cameraConfig } = configRef.current;
        const composer = composerRef.current;

        uniforms.time.value += 0.01;
        observer.update(0.016);

        uniforms.bg_offset.value.x += 0.0001;
        uniforms.bg_offset.value.y += 0.0001;

        uniforms.cam_pos.value.copy(observer.position);
        uniforms.cam_dir.value.copy(observer.direction);
        uniforms.cam_up.value.copy(observer.up);
        uniforms.cam_vel.value.copy(observer.velocity);
        uniforms.fov.value = observer.fov;

        // Update uniforms based on config values
        uniforms.accretion_disk.value = effectConfig.accretion_disk;
        uniforms.use_disk_texture.value = effectConfig.use_disk_texture;
        uniforms.doppler_shift.value = effectConfig.doppler_shift;
        uniforms.lorentz_transform.value = effectConfig.lorentz_transform;
        uniforms.beaming.value = effectConfig.beaming;

        composer.passes[1].strength = bloomConfig.strength;
        composer.passes[1].radius = bloomConfig.radius;
        composer.passes[1].threshold = bloomConfig.threshold;

        observer.distance = cameraConfig.distance;
        observer.fov = cameraConfig.fov;
        observer.moving = cameraConfig.orbit;
        observer.updateProjectionMatrix();

        composer.render();
      };

      animationFrame();
    } catch (error) {
      console.error('Error in animate:', error);
    }
  }, []);

  useEffect(() => {
    const sceneObjects = initializeScene();
    if (sceneObjects) {
      animate();
    }

    const handleResize = () => {
      if (!rendererRef.current || !composerRef.current || !uniformsRef.current || !observerRef.current) return;

      const width = window.innerWidth;
      const height = window.innerHeight;
      rendererRef.current.setSize(width, height);
      composerRef.current.setSize(width, height);
      uniformsRef.current.resolution.value.set(width, height);
      observerRef.current.aspect = width / height;
      observerRef.current.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [initializeScene, animate]);

  useEffect(() => {
    if (observerRef.current && configRef.current) {
      const minDistance = 2;
      const maxDistance = 14;
      const scrollRange = 1000;
      
      const newDistance = maxDistance - (scrollPosition / scrollRange) * (maxDistance - minDistance);
      
      observerRef.current.distance = Math.min(Math.max(newDistance, minDistance), maxDistance);
      configRef.current.cameraConfig.distance = observerRef.current.distance;
    }
  }, [scrollPosition]);

  return (
    <div>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100vh' }} />
    </div>
  );
};

export default BlackHole;
import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { CameraDragControls } from "./camera/CameraDragControls";
import { Observer } from "./camera/Observer";
import vertexShader from './vertexShader.glsl';
import fragmentShader from './fragmentShader.glsl';
import { createConfigGUI } from './gui/datGUI';
import { createStatsGUI } from './gui/statsGUI';

const BlackHole = ({ scrollPosition }) => {
  const canvasRef = useRef(null);
  const [debugInfo, setDebugInfo] = useState('Initializing...');
  const observerRef = useRef(null);
  const cameraConfigRef = useRef(null);
  const rendererRef = useRef(null);
  const composerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const uniformsRef = useRef(null);
  const effectConfigRef = useRef(null);
  const bloomConfigRef = useRef(null);

  const initializeScene = useCallback(() => {
    try {
      if (!canvasRef.current) {
        setDebugInfo('Canvas not found');
        return null;
      }

      setDebugInfo('Setting up renderer...');
      const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
      renderer.setSize(window.innerWidth, window.innerHeight);
      rendererRef.current = renderer;

      setDebugInfo('Setting up scene and camera...');
      const scene = new THREE.Scene();
      sceneRef.current = scene;
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      cameraRef.current = camera;

      setDebugInfo('Setting up EffectComposer...');
      const composer = new EffectComposer(renderer);
      composerRef.current = composer;
      const renderPass = new RenderPass(scene, camera);
      const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
      composer.addPass(renderPass);
      composer.addPass(bloomPass);

      setDebugInfo('Setting up Observer and CameraDragControls...');
      const observer = new Observer(60, window.innerWidth / window.innerHeight, 0.1, 1000);
      observerRef.current = observer;
      observer.distance = 10;
      observer.position.set(0, 0, observer.distance);
      observer.setDirection(0, 0);
      const cameraControl = new CameraDragControls(observer, canvasRef.current);

      setDebugInfo('Loading textures...');
      const textureLoader = new THREE.TextureLoader();
      const diskTexture = textureLoader.load('/accretion_disk.png');
      const bgTexture = textureLoader.load('/milkyway.jpg')

      setDebugInfo('Setting up uniforms...');
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
      };
      uniformsRef.current = uniforms;

      setDebugInfo('Creating shader material...');
      const material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
      });

      setDebugInfo('Creating mesh...');
      const geometry = new THREE.PlaneGeometry(2, 2);
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      setDebugInfo('Setting up GUI...');
      const changePerformanceQuality = (quality) => {
        console.log('Changing quality to:', quality);
      };

      const saveScreenshot = () => {
        console.log('Saving screenshot');
      };

      const { performanceConfig, bloomConfig, effectConfig, cameraConfig } = createConfigGUI(changePerformanceQuality, saveScreenshot);
      cameraConfigRef.current = cameraConfig;
      effectConfigRef.current = effectConfig;
      bloomConfigRef.current = bloomConfig;

      setDebugInfo('Setting up Stats...');
      const stats = createStatsGUI();
      document.body.appendChild(stats.dom);

      return { renderer, scene, camera, composer, observer, cameraControl, bloomPass, uniforms, stats };
    } catch (error) {
      setDebugInfo(`Error in initializeScene: ${error.message}`);
      console.error('Error in initializeScene:', error);
      return null;
    }
  }, []);

  const animate = useCallback(() => {
    try {
      const animationFrame = () => {
        requestAnimationFrame(animationFrame);
        
        if (!observerRef.current || !uniformsRef.current || !effectConfigRef.current || !bloomConfigRef.current || !cameraConfigRef.current || !composerRef.current) {
          return;
        }

        const stats = createStatsGUI();
        stats.begin();

        const uniforms = uniformsRef.current;
        const observer = observerRef.current;
        const effectConfig = effectConfigRef.current;
        const bloomConfig = bloomConfigRef.current;
        const cameraConfig = cameraConfigRef.current;
        const composer = composerRef.current;

        uniforms.time.value += 0.01;
        observer.update(0.016);

        uniforms.cam_pos.value.copy(observer.position);
        uniforms.cam_dir.value.copy(observer.direction);
        uniforms.cam_up.value.copy(observer.up);
        uniforms.cam_vel.value.copy(observer.velocity);
        uniforms.fov.value = observer.fov;

        // Update uniforms based on GUI values
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

        stats.end();
      };

      animationFrame();
    } catch (error) {
      setDebugInfo(`Error in animate: ${error.message}`);
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
      if (sceneObjects && sceneObjects.stats) {
        document.body.removeChild(sceneObjects.stats.dom);
      }
      setDebugInfo('Component unmounted');
    };
  }, [initializeScene, animate]);

  useEffect(() => {
    if (observerRef.current && cameraConfigRef.current) {
      const minDistance = 2;
      const maxDistance = 14;
      const scrollRange = 1000;
      
      const newDistance = maxDistance - (scrollPosition / scrollRange) * (maxDistance - minDistance);
      
      observerRef.current.distance = Math.min(Math.max(newDistance, minDistance), maxDistance);
      cameraConfigRef.current.distance = observerRef.current.distance;
    }
  }, [scrollPosition]);

  return (
    <div>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100vh' }} />
      <div style={{ position: 'absolute', top: 10, left: 10, color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', padding: '5px' }}>
        Debug Info: {debugInfo}
      </div>
    </div>
  );
};

export default BlackHole;
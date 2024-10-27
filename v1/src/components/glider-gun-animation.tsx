"use client"

import React, { useState, useEffect, useCallback, useRef } from 'react';

const CELL_SIZE = 5;
const ANIMATION_SPEED = 100;

type Cell = boolean;
type Grid = Cell[][];
type Direction = 'down-left' | 'up-right';

function GliderGunAnimation({ direction = 'down-left' }: { direction?: Direction }) {
  const [cells, setCells] = useState<Grid>([]);
  const [isRunning, setIsRunning] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [containerDimensions, setContainerDimensions] = useState({ width: 300, height: 200 });
  const [canvasDimensions, setCanvasDimensions] = useState({ width: 300, height: 1000 });

  useEffect(() => {
    const updateDimensions = () => {
      const parentElement = canvasRef.current?.parentElement;
      if (parentElement) {
        const containerWidth = parentElement.clientWidth;
        const containerHeight = parentElement.clientHeight;
        setContainerDimensions({
          width: containerWidth,
          height: containerHeight
        });
        setCanvasDimensions({
          width: containerWidth,
          height: containerHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const addGliderGun = (grid: Grid, x: number, y: number) => {
    const gliderGun = [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
      [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
      [1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ];
    
    for (let i = 0; i < gliderGun.length; i++) {
      for (let j = 0; j < gliderGun[i].length; j++) {
        if (direction === 'down-left') {
          if (y + i < grid.length && x - j >= 0) {
            grid[y + i][x - j] = !!gliderGun[i][j];
          }
        } else {
          if (y - i >= 0 && x + j < grid[0].length) {
            grid[y - i][x + j] = !!gliderGun[8-i][35-j];
          }
        }
      }
    }
  };

  const initializeGrid = useCallback((width: number, height: number): Grid => {
    const rows = Math.floor(height / CELL_SIZE);
    const cols = Math.floor(width / CELL_SIZE);
    const grid = Array(rows).fill(null).map(() => Array(cols).fill(false));
    
    if (direction === 'down-left') {
      addGliderGun(grid, cols - 5, 5);
    } else {
      addGliderGun(grid, 5, rows - 5);
    }
    
    return grid;
  }, [direction]);

  useEffect(() => {
    setCells(initializeGrid(canvasDimensions.width, canvasDimensions.height));
  }, [canvasDimensions, initializeGrid]);

  const updateCells = useCallback((prevCells: Grid): Grid => {
    return prevCells.map((row, y) => 
      row.map((cell, x) => {
        const neighbors = countNeighbors(prevCells, x, y);
        if (cell) {
          return neighbors === 2 || neighbors === 3;
        } else {
          return neighbors === 3;
        }
      })
    );
  }, []);

  const countNeighbors = (cells: Grid, x: number, y: number): number => {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const newY = y + i;
        const newX = x + j;
        if (newY >= 0 && newY < cells.length && newX >= 0 && newX < cells[0].length) {
          count += cells[newY][newX] ? 1 : 0;
        }
      }
    }
    return count;
  };

  useEffect(() => {
    if (!cells.length) return;

    let intervalId: NodeJS.Timeout;

    const runSimulation = () => {
      if (isRunning) {
        setCells(prevCells => {
          const newCells = updateCells(prevCells);
          return newCells;
        });
      }
    };

    intervalId = setInterval(runSimulation, ANIMATION_SPEED);

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, updateCells, cells]);

  useEffect(() => {
    if (!cells.length) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height);
    cells.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell) {
          ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
          ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE - 1, CELL_SIZE - 1);
        }
      });
    });
  }, [cells, canvasDimensions]);

  return (
    <div style={{ 
      width: '100%', 
      height: '100%',
      zIndex: 1,
      overflow: 'hidden'
    }}>
      <canvas
        ref={canvasRef}
        width={canvasDimensions.width}
        height={canvasDimensions.height}
        style={{
          width: containerDimensions.width,
          height: containerDimensions.height,
          transform: direction === 'up-right' ? 'scaleY(-1)' : 'none'
        }}
      />
    </div>
  );
}

export default GliderGunAnimation;
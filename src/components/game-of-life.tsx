"use client"

import React, { useState, useEffect, useCallback, useRef } from 'react';

const CELL_SIZE = 5;
const ANIMATION_SPEED = 100;

type Cell = boolean;
type Grid = Cell[][];

function GameOfLife() {
  const [cells, setCells] = useState<Grid>([]);
  const [isRunning, setIsRunning] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 900 });

  const addGlider = (grid: Grid, x: number, y: number, direction: 'ne' | 'nw' | 'se' | 'sw') => {
    const glider = [
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 1]
    ];
    
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let newX = x + j;
        let newY = y + i;
        
        switch (direction) {
          case 'ne':
            grid[newY][newX] = !!glider[2-i][j];
            break;
          case 'nw':
            grid[newY][newX] = !!glider[2-i][2-j];
            break;
          case 'se':
            grid[newY][newX] = !!glider[i][j];
            break;
          case 'sw':
            grid[newY][newX] = !!glider[i][2-j];
            break;
        }
      }
    }
  };

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: 900
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const createEmptyGrid = useCallback((width: number, height: number): Grid => {
    const rows = Math.floor(height / CELL_SIZE);
    const cols = Math.floor(width / CELL_SIZE);
    return Array(rows).fill(null).map(() => Array(cols).fill(false));
  }, []);

  const initializeGrid = useCallback((width: number, height: number): Grid => {
    const rows = Math.floor(height / CELL_SIZE);
    const cols = Math.floor(width / CELL_SIZE);
    const grid = Array(rows).fill(null).map(() => Array(cols).fill(false));
    
    // Add gliders in the corners
    addGlider(grid, 1, 1, 'se');
    addGlider(grid, cols - 4, 1, 'sw');
    addGlider(grid, 1, rows - 4, 'ne');
    addGlider(grid, cols - 4, rows - 4, 'nw');
    
    return grid;
  }, []);

  useEffect(() => {
    setCells(initializeGrid(dimensions.width, dimensions.height));
  }, [dimensions, initializeGrid]);

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

    ctx.clearRect(0, 0, dimensions.width, dimensions.height);
    cells.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell) {
          ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
          ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE - 1, CELL_SIZE - 1);
        }
      });
    });
  }, [cells, dimensions]);

  const handleCanvasClick = useCallback((event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((event.clientX - rect.left) / CELL_SIZE);
    const y = Math.floor((event.clientY - rect.top) / CELL_SIZE);

    setCells(prevCells => {
      const newCells = prevCells.map(row => [...row]);
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          const newY = y + i;
          const newX = x + j;
          if (newY >= 0 && newY < newCells.length && newX >= 0 && newX < newCells[0].length) {
            newCells[newY][newX] = Math.random() > 0.5;
          }
        }
      }
      return newCells;
    });
  }, []);

  return (
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '900px', 
      zIndex: 1,
      overflow: 'hidden'
    }}>
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        onClick={handleCanvasClick}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  );
}

export default GameOfLife;
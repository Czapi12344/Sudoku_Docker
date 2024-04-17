import React, { useState } from "react";

import Board from "./Board.tsx";

interface CellPuzzle {
  value: number | null;
  editable: boolean;
}

const puzzleGrid: CellPuzzle[][] = [
  [
    { value: 5, editable: false },
    { value: 0, editable: true },
    { value: 3, editable: false },
    { value: 0, editable: true },
    { value: 0, editable: true },
    { value: 6, editable: false },
    { value: 0, editable: true },
    { value: 0, editable: true },
    { value: 0, editable: true },
  ],
  [
    { value: 0, editable: true },
    { value: 0, editable: true },
    { value: 8, editable: false },
    { value: 0, editable: true },
    { value: 7, editable: false },
    { value: 0, editable: true },
    { value: 0, editable: true },
    { value: 0, editable: true },
    { value: 0, editable: true },
  ],
  [
    { value: 0, editable: true },
    { value: 0, editable: true },
    { value: 0, editable: true },
    { value: 9, editable: false },
    { value: 0, editable: true },
    { value: 0, editable: true },
    { value: 5, editable: false },
    { value: 0, editable: true },
    { value: 4, editable: false },
  ],
  [
    { value: 4, editable: false },
    { value: 0, editable: true },
    { value: 0, editable: true },
    { value: 0, editable: true },
    { value: 5, editable: false },
    { value: 0, editable: true },
    { value: 9, editable: false },
    { value: 0, editable: true },
    { value: 0, editable: true },
  ],
  [
    { value: 0, editable: true },
    { value: 0, editable: true },
    { value: 2, editable: false },
    { value: 0, editable: true },
    { value: 9, editable: false },
    { value: 0, editable: true },
    { value: 3, editable: false },
    { value: 0, editable: true },
    { value: 0, editable: true },
  ],
  [
    { value: 0, editable: true },
    { value: 0, editable: true },
    { value: 6, editable: false },
    { value: 0, editable: true },
    { value: 8, editable: false },
    { value: 0, editable: true },
    { value: 0, editable: true },
    { value: 0, editable: true },
    { value: 7, editable: false },
  ],
  [
    { value: 7, editable: false },
    { value: 0, editable: true },
    { value: 4, editable: false },
    { value: 0, editable: true },
    { value: 0, editable: true },
    { value: 0, editable: true },
    { value: 0, editable: true },
    { value: 0, editable: true },
    { value: 0, editable: true },
  ],
  [
    { value: 0, editable: true },
    { value: 0, editable: true },
    { value: 0, editable: true },
    { value: 0, editable: true },
    { value: 1, editable: false },
    { value: 0, editable: true },
    { value: 8, editable: false },
    { value: 0, editable: true },
    { value: 0, editable: true },
  ],
  [
    { value: 0, editable: true },
    { value: 0, editable: true },
    { value: 0, editable: true },
    { value: 3, editable: false },
    { value: 0, editable: true },
    { value: 0, editable: true },
    { value: 1, editable: false },
    { value: 0, editable: true },
    { value: 9, editable: false },
  ],
];

const Game: React.FC = () => {
  const [puzzle, setPuzzle] = useState<CellPuzzle[][]>(puzzleGrid);

  const handleCellChange = (row: number, col: number, value: number | null) => {
    const newPuzzle = puzzle.map((rowArr, rowIndex) =>
      rowArr.map((cell, colIndex) =>
        rowIndex === row && colIndex === col ? { ...cell, value } : cell
      )
    );
    setPuzzle(newPuzzle);
  };


  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center mb-4">Sudoku</h1>
      <Board
        puzzle={puzzle}

        onChange={handleCellChange} initialPuzzle={[]}      />
      <div className="flex justify-center mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded mr-2">
          Check
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded">
          New Game
        </button>
      </div>
    </div>
  );
};

export default Game;

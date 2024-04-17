import React from "react";
import Cell from "./Cell.tsx";

type CellPuzzle = {
  value: number | null;
  editable: boolean;
};

type BoardProps = {
  puzzle: CellPuzzle[][];
  initialPuzzle: CellPuzzle[][];
  onChange: (row: number, col: number, value: number | null) => void;
};

const Board: React.FC<BoardProps> = ({ puzzle, initialPuzzle, onChange }) => {
  const handleCellChange = (row: number, col: number, value: number | null) => {
    if (!initialPuzzle[row][col].editable) {
      onChange(row, col, value);
    }
  };

  return (
    <div className="grid grid-rows-9  gap-1">
      {puzzle.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cell, colIndex) => (
            <div key={colIndex} className="flex justify-center items-center">
              <Cell
                value={cell.value}
                editable={cell.editable}
                onChange={(value) =>
                  handleCellChange(rowIndex, colIndex, value)
                }
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;

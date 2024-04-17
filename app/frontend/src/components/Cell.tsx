import React from "react";

type CellProps = {
  value: number | null;
  editable: boolean;
  onChange: (value: number | null) => void;
};

const Cell: React.FC<CellProps> = ({ value, editable, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue =
      e.target.value === "" ? null : parseInt(e.target.value, 10);
    onChange(newValue);
  };

  return (
    <input
      className="w-10 h-10 border border-gray-300 text-center"
      type="number"
      value={value || ""}
      min="1"
      max="9"
      disabled={!editable}
      onChange={handleChange}
    />
  );
};

export default Cell;

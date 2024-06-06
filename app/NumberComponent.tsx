import React from "react";

interface NumberComponentProps {
  number: number;
  isSelected: boolean;
}

const NumberComponent = ({ number, isSelected }: NumberComponentProps) => {
  return (
    <div
      className={`w-[4rem] ${
        isSelected ? "bg-black/5" : "bg-black"
      } font-bold text-white justify-center rounded-md p-2 m-2`}
    >
      {number}
    </div>
  );
};

export default NumberComponent;

import React from "react";
import NumberComponent from "./NumberComponent";

interface NumberProps {
  selectedNumbers: number[];
}

const Number = ({ selectedNumbers }: NumberProps) => {
  const numbers = Array.from({ length: 70 }, (_, i) => i + 1);

  return (
    <>
      <div className="flex flex-wrap pl-5 bg-gradient-to-r from-blue-300 via-violet-100 to-emerald-300">
        {numbers.map((number) => (
          <NumberComponent
            key={number}
            number={number}
            isSelected={selectedNumbers.includes(number)}
          />
        ))}
      </div>
      <div className="h-[20vh] bg-gradient-to-r from-blue-300 via-violet-100 to-emerald-300"></div>
    </>
  );
};

export default Number;

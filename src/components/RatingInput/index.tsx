import React from "react";

interface RatingInputProps {
  value: number;
  total: number;
  onChange: (value: number) => void;
  color?: string;
  bgColor?: string;
}
const RatingInput = ({
  value = 0,
  total = 5,
  onChange,
  color = "#9125e6",
  bgColor = "#e9d4ef",
}: RatingInputProps) => {

  const displayValue = Math.round((value / 100) * total);

  const handleClick = (index: number) => {
    const newValue = Math.round(((index + 1) / total) * 100);
    onChange(newValue);
  };

  return (
    <div className="flex gap-3 cursor-pointer">
      {[...Array(total)].map((_, index) => {
        const isActive = index < displayValue;
        return (
          <div
            key={index}
            className="w-4 h-4 rounded transition-all duration-300"
            onClick={() => handleClick(index)}
            style={{ backgroundColor: isActive ? color : bgColor }}
          ></div>
        );
      })}
    </div>
  );
};

export default RatingInput;

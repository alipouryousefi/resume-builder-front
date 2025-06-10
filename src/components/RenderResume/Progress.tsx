import React from "react";

interface ProgressProps {
  progress: number;
  color: string;
  bgColor: string;
  total?: number;
}
const Progress = ({
  progress = 0,
  total = 5,
  color,
  bgColor,
}: ProgressProps) => {
  return (
    <div className="flex gap-1.5">
      {[...Array(total)].map((_, index) => (
        <div
          key={`progress_${index}`}
          className={`w-2 h-2 rounded transition-all ${
            index < progress ? "bg-cyan-500" : "bg-cyan-100"
          }`}
          style={{
            background:
              index < progress
                ? color || "rgb(1,1,1,1)"
                : bgColor || "rgb(1,1,1,0.1)",
          }}
        ></div>
      ))}
    </div>
  );
};

export default Progress;

"use client";
import { Heart } from "lucide-react";
import { useState } from "react";

const Page = () => {
  const [num, setNum] = useState(0);
  const plus = () => {
    setNum((x) => x + 1);
  };
  const minus = () => {
    setNum((x) => x - 1);
  };
  const [fill, setFill] = useState(false);
  return (
    <div className="flex flex-row gap-3 items-center">
      <button onClick={minus}>-</button>
      <span style={{ color: num >= 5 ? "green" : num <= -5 ? "red" : "black" }}>
        {num}
      </span>
      <button onClick={plus}>+</button>

      <Heart fill={fill ? "red" : "white"} onClick={() => setFill((x) => !x)} />
    </div>
  );
};

export default Page;

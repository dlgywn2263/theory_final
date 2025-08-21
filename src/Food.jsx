"use client";

import { useState } from "react";

const Food = () => {
  const [food, setFood] = useState("");
  const [isClick, setIsClick] = useState(false);
  return (
    <div>
      <input
        onChange={(e) => {
          setIsClick((x) => false);
          setFood((x) => e.target.value);
        }}
        className="border-2 border-black"
        type="text"
      />
      <button
        onClick={() => {
          setIsClick((x) => true);
        }}
      >
        등록
      </button>
      <div>내가 먹고 싶은것: {isClick && food}</div>
    </div>
  );
};

export default Food;

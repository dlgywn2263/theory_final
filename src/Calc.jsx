"use client";

import { useState } from "react";

const Calc = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [sum, setSum] = useState(0);
  const add = () => {
    setSum((x) => first + second);
  };
  return (
    <div>
      <input
        onChange={(e) => setFirst((prev) => +e.target.value)}
        type="text"
      />

      <input
        onChange={(e) => setSecond((prev) => +e.target.value)}
        type="text"
      />
      <button>+</button>
      <span>합: {}</span>
    </div>
  );
};

export default Calc;

"use client";

import { useState } from "react";

const Page = () => {
  const [num, setNum] = useState(0);
  const minus = () => {
    setNum((x) => x - 1);
  };
  const plus = () => {
    setNum((x) => x + 1);
  };
  const [emoji, setEmmoji] = useState("😎");
  const sleep = () => {
    setEmmoji((x) => !x);
  };
  return (
    <div>
      <button onClick={minus}>-</button>
      <button>{num}</button>
      <button onClick={plus}>+</button>
      <span onClick={sleep}>{emoji}</span>
    </div>
  );
};
export default Page;

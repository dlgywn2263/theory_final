"use client";
import { Heart } from "lucide-react";
import { useState } from "react";

const Like = () => {
  const [num, setNum] = useState(0);
  const like = () => setNum((x) => x + 1);
  return (
    <div onClick={like} className="flex flex-col items-center">
      <Heart
        fill={num > 0 ? "red" : "white"}
        color={num > 0 ? "red" : "black"}
      />

      <span>{num}</span>
    </div>
  );
};

export default Like;

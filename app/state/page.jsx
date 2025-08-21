"use client";
import { Trash2 } from "lucide-react";
import { useState } from "react";

const Page = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState("");
  return (
    <>
      <div className="flex">
        <input
          className="border-2 border-blue-300"
          onChange={input}
          type="text"
        />
        <button className="bg-pink-200">등록</button>
      </div>
      <div>
        <span>오늘 할일</span>
        <span>{todo}</span>
        <Trash2 />
      </div>
    </>
  );
};

export default Page;

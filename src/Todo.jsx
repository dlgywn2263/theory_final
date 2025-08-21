"use client";
import { Trash2 } from "lucide-react";
import { useState } from "react";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [todo, setTodo] = useState([]);
  return (
    <>
      <div>
        <input
          className=" border-2 border-sky-100"
          onChange={(e) => {
            setInputData((prev) => e.target.value);
          }}
          placeholder="오늘 할일"
          type="text"
        />
        <button
          onClick={() => setTodo((prev) => [...prev, inputData])}
          className="bg-pink-50"
        >
          등록
        </button>
      </div>
      <div className="flex flex-col">
        <span>오늘 할일</span>
        <span>
          {todo.map((v, i) => (
            <div className="flex gap-1">
              <span key={i} className="text-red-700">
                {v}
              </span>
              <Trash2
                onClick={() => {
                  setTodo((prev) => [...prev].filter((x) => x != v));
                }}
              />
            </div>
          ))}
        </span>
      </div>
    </>
  );
};

export default Todo;

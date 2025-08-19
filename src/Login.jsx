"use client";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Login = () => {
  const [isOpen, setIsopen] = useState(true);
  const abc = () => {
    setIsopen((x) => !x);
  };
  return (
    <div className="flex gap-2 items-center">
      <input
        className=" border-2 border-black"
        type={isOpen ? "text" : "password"}
      />
      <div onClick={abc}>{isOpen ? <Eye /> : <EyeOff />}</div>
    </div>
  );
};

export default Login;

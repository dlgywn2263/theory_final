"use client";

const Page = () => {
  const test = () => {
    alert("ㄹㅇ 다 까먹음 ㅎ");
  };
  const finish = () => {
    console.log("수업 언제 끝남");
  };
  return (
    <>
      <button onClick={test}>0</button>
      <button onClick={finish}>수업</button>
    </>
  );
};

export default Page;

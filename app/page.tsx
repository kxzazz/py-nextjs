"use client";
import { useState } from "react";
export default function Home() {
  const [jq, setJq] = useState({});
  const makeApiCall = async () => {
    const data = await (await fetch("/api/python")).json();
    setJq(data);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <button
        onClick={makeApiCall}
        className="text-xl bg-blue-500 hover:bg-blue-700 font-bold rounded p-2"      >
        Get rESPonse FRom PYTHON 🐍
      </button>
      <div className="text-2xl">{JSON.stringify(jq)}</div>
    </div>
  );
}

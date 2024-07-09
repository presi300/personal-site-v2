import React from "react";
import { useAtom } from "jotai";
import { selectedAccent } from "@/components/Atoms";
import { useState } from "react";
export default function Button({ children, clickfunc }) {
  const atom = useAtom(selectedAccent);
  const accent = atom[0].color;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`bg-sleepless-50 dark:bg-gray-900   rounded-3xl transition-all hover:scale-105 ${
        isHovered ? "shadow-lg" : "shadow-md"
      } `}
    >
      <button
        style={{
          backgroundColor: isHovered ? accent + "30" : accent + "15",
          borderColor: accent + "60",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className=" p-2 px-3 rounded-3xl transition-all border"
        onClick={clickfunc}
      >
        {children}
      </button>
    </div>
  );
}

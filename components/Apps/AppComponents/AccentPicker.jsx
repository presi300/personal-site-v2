import React, { useState } from "react";
import { selectedAccent } from "@/components/Atoms";
import { useAtom } from "jotai";

export default function AccentPicker({ spawn }) {
  const [chosenAccent, setChosenAccent] = useAtom(selectedAccent);

  const [selectedColor, setSelectedColor] = useState(7);

  const accents = [
    { id: 1, color: "#F24336" },
    { id: 2, color: "#F48019" },
    { id: 3, color: "#FDEC58" },
    { id: 4, color: "#4DAE51" },
    { id: 5, color: "#B76BFF" },
    { id: 6, color: "#1C90FF" },
    { id: 7, color: "#16191b" },
  ];
  return (
    <div className="flex gap-3">
      {accents.map(({ id, color }) => (
        <button
          onClick={() => {
            setChosenAccent(color);
            setSelectedColor(id);
          }}
          key={id}
          className={`rounded-full w-[20px] h-[20px] ${
            (selectedColor === id &&
              "border-4 border-sleepless-100 border-opacity-200 dark:border-sleepless-100") ||
            "border border-sleepless-100"
          }`}
          style={{ background: color }}
        ></button>
      ))}
    </div>
  );
}

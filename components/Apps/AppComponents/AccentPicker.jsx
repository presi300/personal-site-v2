import React from "react";
import { selectedAccent } from "@/components/Atoms";
import { useAtom } from "jotai";
import useLocalStorage from "@/components/hooks/useLocalStorage";

export default function AccentPicker({}) {
  const accents = [
    { id: 1, color: "#F24336" },
    { id: 2, color: "#F48019" },
    { id: 3, color: "#FDEC58" },
    { id: 4, color: "#4DAE51" },
    { id: 5, color: "#B76BFF" },
    { id: 6, color: "#1C90FF" },
    { id: 7, color: "#16191b" },
    { id: 8, color: "#9fa1a2" },
  ];
  const [chosenAccent, setChosenAccent] = useAtom(selectedAccent);

  return (
    <div className="flex gap-3">
      {accents.map(({ id, color }) => (
        <button
          onClick={() => {
            setChosenAccent({ color: color, id: id });
          }}
          key={id}
          className={`rounded-full w-[20px] h-[20px] ${
            (chosenAccent.id === id &&
              "border-4 border-white border-opacity-200 dark:border-white shadow-sm shadow-sleepless-200") ||
            "border border-sleepless-100"
          }`}
          style={{ background: color }}
        ></button>
      ))}
    </div>
  );
}

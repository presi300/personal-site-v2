import { Children } from "react";
import React from "react";
import { selectedAccent } from "@/components/Atoms";
import { useAtom } from "jotai";

import NavButton from "@/components/Layouts/Desktop/Components/navButton";
export default function Modal({ children, closefunc }) {
  const accent = useAtom(selectedAccent)[0].color;
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-15">
      <div
        style={{ borderColor: accent + "80" }}
        className="w-[90%] max-w-[800px] bg-sleepless-50 shadow-sleepless-400 shadow-md  dark:bg-sleepless-300  border rounded-lg"
      >
        <div
          style={{ backgroundColor: accent + "50" }}
          className="w-full p-2 rounded-t-lg shadow-sm"
        >
          <NavButton color={"#F34437"} clickfunc={closefunc}></NavButton>
        </div>
        <div className="w-full h-full ">{children}</div>
      </div>
    </div>
  );
}

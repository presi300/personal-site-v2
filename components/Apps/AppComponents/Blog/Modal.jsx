import { Children } from "react";
import React from "react";
import NavButton from "@/components/Layouts/Desktop/Components/navButton";
export default function Modal({ children, closefunc }) {
  return (
    <div className="left-0 right-0 top-0 bottom-0 fixed bg-black bg-opacity-5 flex items-center justify-center">
      <div className="w-[90%] max-w-[800px] min-h-[200px] bg-sleepless-50 shadow-sleepless-200 shadow-2xl border-sleepless-75 dark:border-sleepless-200 border rounded-lg">
        <div className="w-full dark:bg-gray-700 bg-gray-300 rounded-t-lg p-2 shadow-sm shadow-sleepless-300">
          <NavButton color={"#F34437"} clickfunc={closefunc}></NavButton>
        </div>

        {children}
      </div>
    </div>
  );
}

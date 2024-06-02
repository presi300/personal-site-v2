import React from "react";
import { children } from "react";

export default function NavButton({ color, children, clickfunc }) {
  return (
    <button
      className="rounded-full h-[14px] w-[14px] p-1 hover:cursor-pointer flex items-center justify-center"
      onClick={clickfunc}
      style={{ backgroundColor: color }}
    >
      <div className="hidden hover:block"> {children}</div>
    </button>
  );
}

import React from "react";

export default function Launcher({ icon, clickfunc, active }) {
  return (
    <div className="flex flex-col items-center justify-center pt-1">
      <img
        className="w-[65px] hover:scale-110 transition-transform hover:cursor-pointer"
        src={icon}
        onClick={clickfunc}
      ></img>
      <div
        style={{ background: active ? "#787a7b" : "#00000000" }}
        className="w-[4px] h-[4px]  rounded-full"
      ></div>
    </div>
  );
}

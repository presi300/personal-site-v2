import React from "react";
import Clock from "react-live-clock";

export default function TopBar({ accent }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-20 h-[30px] dark:bg-sleepless-400 bg-sleepless-75 bg-opacity-70 backdrop-blur-xl transition-colors">
      <div
        className="w-full h-full flex items-center px-5"
        style={{ backgroundColor: accent + "15" }}
      >
        <button>
          <img className="pt-2 shadow-sm" src="/icons/moaiSmall.svg"></img>
        </button>

        <div className="w-full h-full flex items-center justify-end">
          <Clock
            className="text-sleepless-400 dark:text-sleepless-50"
            format={"HH:mm"}
            ticking={true}
            timezone={"Europe/Sofia"}
          />
        </div>
      </div>
    </div>
  );
}

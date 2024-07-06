import React from "react";
import { useState } from "react";

export default function AppGrid({ children }) {
  return (
    <div className="top-0 bottom-0 right-0 left-0 flex items-start justify-center pt-12 bg-sleepless-75 dark:bg-sleepless-400 fixed z-[20] bg-opacity-40 backdrop-blur-lg">
      <div className="w-full grid grid-cols-4 max-w-[340px]">{children}</div>
    </div>
  );
}

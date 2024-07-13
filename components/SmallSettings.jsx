import React from "react";
import { useAtom } from "jotai";
import { selectedAccent } from "./Atoms";
import TestApp1 from "./Apps/ActualApps/App1";

export default function SmallSettings() {
  return (
    <div className="w-full h-full">
      <TestApp1></TestApp1>
    </div>
  );
}

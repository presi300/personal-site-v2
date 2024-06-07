import React from "react";
import TestApp1 from "../ActualApps/App1";
import TestApp2 from "../ActualApps/App2";
import TestApp3 from "../ActualApps/App3";
import TestApp4 from "../ActualApps/App4";
import AppGrid from "../ActualApps/AppGrid";

export default function AppMapper({ appId, spawn, mobile = false }) {
  if (spawn && appId) {
    return (
      <div
        className={`absolute top-0 bottom-0 right-0 left-0  ${
          mobile ? "pt-[30px]" : "pt-[50px]"
        }`}
      >
        {/* Nothing lol */}
        {appId === 0 && <div></div>}
        {/* Regular apps */}
        {appId === 1 && <TestApp1></TestApp1>}
        {appId === 2 && <TestApp2></TestApp2>}
        {appId === 3 && <TestApp3></TestApp3>}
        {appId === 4 && <TestApp4></TestApp4>}
        {/* Special apps */}
        {appId === 10 && <AppGrid></AppGrid>}
      </div>
    );
  } else {
    return [1, 2, 3, 4];
  }
}

export const appObj = [
  { id: 1, appName: "Settings", icon: "icons/3.svg", minW: 600, minH: 400 },
  { id: 2, appName: "Blog", icon: "icons/2.svg", minW: 600, minH: 400 },
  { id: 3, appName: "About me", icon: "icons/1.svg", minW: 500, minH: 500 },
  { id: 4, appName: "Test3", icon: "icons/1.svg", minW: 500, minH: 300 },
];

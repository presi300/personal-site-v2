import React from "react";
import FancyWindow from "./Components/window";
import { useState, useEffect, useRef, createRef } from "react";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import AppMapper from "@/components/Apps/AppMapper";
import Launcher from "./Components/launcher";
import TopBar from "./Components/topbar";
import NavButton from "./Components/navButton";
import { appObj } from "@/components/Apps/AppMapper";
import useCursorPosition from "@/components/hooks/useCursorPosition";

function moveToFirst(arr, targetElement) {
  const index = arr.indexOf(targetElement);
  // Check if element exists in the array
  if (index !== -1) {
    return [targetElement, ...arr.slice(0, index), ...arr.slice(index + 1)];
  }
  // Return original array if element not found
  return arr;
}
export default function DesktopLayout({ accent }) {
  const { x, y } = useCursorPosition();
  const [isBottomBarUp, isBottomBarUpHandler] = useState(false);

  useEffect(() => {
    if (y >= window.innerHeight - 30 && !isBottomBarUp) {
      isBottomBarUpHandler(true);
    } else if (y < window.innerHeight - 100 && isBottomBarUp) {
      isBottomBarUpHandler(false);
    }
  }, [y]);

  // Array with refs to all windows

  const [ref, refHandler] = useState([]);

  // Array with IDs of all windows
  const [definedWindows, definedWindowsHandler] = useState([]);
  // Array with zIndexes of all windows
  const [currentZ, setCurrentZ] = useState([]);

  // <Logic for focusing and window priority>
  // If a window is clicked or a new one is spawned, set it's Zindex to the top and move all others by 1
  const Focus = (index, active) => {
    if (index) {
      const handleMoveFirst = () => {
        setCurrentZ(moveToFirst(currentZ, index));
      };
      handleMoveFirst(index);
    }

    return currentZ[0];
  };

  function setZ(id) {
    for (let i = 0; i < currentZ.length; i++) {
      if (id === currentZ[i]) {
        return currentZ.length - i;
      }
    }
    return null;
  }
  // </Logic for focusing and window priority>

  function closeWindow(id, key) {
    if (definedWindows.includes(id)) {
      definedWindowsHandler(definedWindows.filter((a) => a !== id));
      refHandler(ref.filter((a) => a !== ref[key]));
    }
    /* ("Window closed!");
    (definedWindows);
    (currentZ);
    (ref);
    (key); */
  }

  function closeBtn(id, key) {
    return (
      <NavButton color={"#F34437"} clickfunc={() => closeWindow(id, key)}>
        <IoClose size={14}></IoClose>
      </NavButton>
    );
  }

  // spawnWindows doesn't control which windows are opened or anything like that, it just maps a window to the screen, whenever it's requested, each window handles dragging and resizing by itself
  function spawnWindows(id, key, spawnX = 300, spawnY = 200) {
    return definedWindows.map((id, key) => (
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
          top: 85,
        }}
        animate={{ opacity: 1, scale: 1, top: 0 }}
        exit={{ opacity: 0, scale: 0.5, top: 100 }}
        transition={{ type: "tween" }}
        style={{
          zIndex: setZ(id),
        }}
        className="absolute top-0 left-0 right-0"
        key={id}
      >
        <FancyWindow
          key={id}
          id={id}
          z={setZ(id)}
          isOpen={true}
          // Random offset go BRRR
          spawnX={window.innerWidth / 2 - 400 + key * 10}
          spawnY={key * 14 + window.innerHeight / 6}
          closebtn={closeBtn(id, key)}
          accent={accent}
          minW={appObj[id - 1].minW}
          minH={appObj[id - 1].minH}
          title={appObj[id - 1].appName}
          ref={ref[key]}
          focused={id === currentZ[0] ? true : false}
          clickFunc={() => {
            Focus(id);
          }}
        >
          <AppMapper spawn={true} appId={id}></AppMapper>
        </FancyWindow>
      </motion.div>
    ));
  }

  // openWindow requests a window to be mapped to the screen by adding it's ID to the definedWindows array, then it sets it's Z value and creates a reference to the newly spawned window

  function openWindow(id) {
    if (!definedWindows.includes(id)) {
      setCurrentZ([id, ...currentZ]);
      refHandler([...ref, createRef(null)]);
      definedWindowsHandler([...definedWindows, id]);
    }
    if (currentZ.includes(id)) {
      Focus(id);
    }
  }

  function CreateLaunchers({}) {
    return AppMapper({}).map((key) => (
      <Launcher
        active={definedWindows.includes(key) && true}
        focused={currentZ.includes(key)}
        icon={appObj[key - 1].icon}
        key={key}
        clickfunc={() => openWindow(key)}
      >
        Open {key}
      </Launcher>
    ));
  }

  return (
    <div className="w-screen h-screen overflow-auto">
      <div
        className="absolute bottom-[4px] flex w-full  justify-center gap-4"
        style={{ zIndex: isBottomBarUp ? 200 : 0 }}
      >
        <div
          style={{ borderColor: accent + "60" }}
          className="bg-opacity-50 border border-opacity-50 bg-sleepless-50 rounded-2xl dark:bg-sleepless-300 border-sleepless-75 backdrop-blur-xl"
        >
          <div
            className="w-full h-full flex gap-5 p-1.5 rounded-2xl"
            style={{ backgroundColor: accent + "15" }}
          >
            <CreateLaunchers></CreateLaunchers>
          </div>
        </div>
      </div>
      <div className="">
        <AnimatePresence>{spawnWindows(definedWindows)}</AnimatePresence>
      </div>
      <div className="fixed bottom-0 flex w-screen gap-2">
        <TopBar accent={accent}></TopBar>
      </div>
    </div>
  );
}

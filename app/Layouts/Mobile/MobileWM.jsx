import React from "react";
import AppMapper from "@/app/Apps/AppMapper";
import SideBar from "./Components/sidebar";
import Launcher from "../Desktop/Components/launcher";
import { useState } from "react";
import NavBar from "./Components/navbar";
import TopBar from "../Desktop/Components/topbar";
import { RxDotsHorizontal } from "react-icons/rx";
import AppGrid from "@/app/ActualApps/AppGrid";
import { motion, AnimatePresence } from "framer-motion";
import { appObj } from "@/app/Apps/AppMapper";

export default function MobileLayout({}) {
  const [activeApp, setActiveApp] = useState(0);
  const [grid, gridActivate] = useState(false);

  function CreateLaunchers({}) {
    return AppMapper({}).map((key) => (
      <Launcher
        active={key === activeApp && true}
        focused={false}
        icon={appObj[key - 1].icon}
        key={key}
        clickfunc={() => {
          setActiveApp(key);
          gridActivate(false);
        }}
      ></Launcher>
    ));
  }
  return (
    <div className="bg-opacity-0 w-screen h-screen overflow-hidden">
      <TopBar></TopBar>
      <AnimatePresence>
        {grid && (
          <motion.div
            initial={{ y: 500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "just", duration: 0.3 }}
            exit={{ y: 500, opacity: 0 }}
            className="bg-opacity-40 backdrop-blur-lg bg-sleepless-50 w-screen h-screen absolute z-10"
          >
            <AppGrid>
              <CreateLaunchers></CreateLaunchers>
            </AppGrid>
          </motion.div>
        )}
      </AnimatePresence>

      <SideBar>
        <CreateLaunchers></CreateLaunchers>
      </SideBar>

      <NavBar
        active={(activeApp !== 0 && true) || grid}
        homefunc={() => {
          setActiveApp(0);
          gridActivate(false);
        }}
      ></NavBar>

      <div className="fixed top-0 bottom-0 left-0 right-0">
        <div className="w-full flex bottom-20 absolute justify-center">
          <button
            onClick={() => gridActivate(true)}
            className="bg-sleepless-50 w-[50px] h-[50px] rounded-full dark:bg-sleepless-400 flex justify-center items-center bg-opacity-50 backdrop-blur-xl"
          >
            <RxDotsHorizontal size={30}></RxDotsHorizontal>
          </button>
        </div>
        <AppMapper spawn={true} mobile={true} appId={activeApp}></AppMapper>
      </div>
    </div>
  );
}

import React from "react";
import Metadata from "@/components/Metadata";
import Button from "@/components/Apps/AppComponents/Button";
import { useRouter } from "next/router";
import { selectedAccent } from "@/components/Atoms";
import { useAtom } from "jotai";
import { motion, AnimatePresence } from "framer-motion";
import MoaiAnimation from "@/components/FrontPage/MoaiAnimation";
import { useState } from "react";
import SmallSettings from "@/components/SmallSettings";

const Home = ({}) => {
  const router = useRouter();
  const atom = useAtom(selectedAccent);
  const accent = atom[0].color;
  const [settings, toggleSettings] = useState(false);
  return (
    <>
      <Metadata
        title="Presi300.com - A website"
        description="A website's frontpage"
        ogImage="https://i.imgur.com/2HsX9U1.png"
      ></Metadata>
      <div className="w-screen h-screen overflow-y-hidden bg-sleepless-400">
        <MoaiAnimation></MoaiAnimation>
        <nav className="fixed top-3 left-3 right-3 bg-sleepless-75 dark:bg-sleepless-300 z-20 bg-opacity-70 dark:bg-opacity-50 h-[60px] rounded-xl  shadow-md backdrop-blur-md">
          {/* Left side */}
          <div
            className="flex items-center w-full h-full border rounded-xl"
            style={{
              backgroundColor: accent + "15",
              borderColor: accent + "25",
            }}
          >
            <button
              className="flex items-center h-full gap-1 pr-5 w-fit "
              onClick={() => toggleSettings(!settings)}
            >
              <img
                src="Images/logo.png"
                className="w-auto h-[35px] rounded-[4px] ml-3"
              ></img>
              <h3
                className="items-end hidden w-full pt-8 pl-0 font-semibold text-end sm:sm:flex dark:text-sleepless-50 text-sleepless-50"
                style={{ textShadow: "2px 2px black" }}
              >
                Presi300.com
              </h3>
            </button>
            <AnimatePresence>
              {settings && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed top-16 left-0 rounded-xl dark:bg-sleepless-400 h-[400px] w-[400px] p-2 bg-sleepless-50 transition-all shadow-lg"
                >
                  <SmallSettings></SmallSettings>
                </motion.div>
              )}
            </AnimatePresence>
            {/* Right side */}
            <div className="flex justify-end w-full pr-3 ">
              <div className="w-fit">
                {" "}
                <Button clickfunc={() => router.push("/desktopPage")}>
                  Go to the real site!
                </Button>
              </div>
            </div>
          </div>
        </nav>
        <main
          className="absolute z-10 flex flex-col items-center w-screen h-screen overflow-hidden backdrop-blur-sm"
          style={{ backgroundColor: accent + "05" }}
        >
          <div className="flex flex-col items-center justify-center w-full h-screen mt-24 overflow-hidden">
            <div className="pb-24">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
                className="p-0 text-4xl dark:text-sleepless-50 text-sleepless-50 sm:text-6xl"
                style={{ textShadow: "2px 2px black" }}
              >
                Presi300.com
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 4 }}
                className="p-0 pt-2 text-3xl dark:text-sleepless-50 text-sleepless-50"
                style={{ textShadow: "2px 2px black" }}
              >
                A website
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 20, duration: 2 }}
            >
              <Button clickfunc={() => router.push("/desktopPage")}>
                This page got your attention?
              </Button>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;

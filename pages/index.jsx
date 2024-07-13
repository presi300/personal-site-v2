import DesktopLayout from "../components/Layouts/Desktop/DesktopWM";
import { useEffect, useState } from "react";
import MobileLayout from "../components/Layouts/Mobile/MobileWM";
import { motion, AnimatePresence } from "framer-motion";
import { FiMonitor } from "react-icons/fi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import useWindowSize from "@/components/hooks/useWindowSize";
import OOBE from "../components/Apps/ActualApps/OOBE";
import useLocalStorage from "@/components/hooks/useLocalStorage";
import { useAtom } from "jotai";
import { selectedAccent } from "@/components/Atoms";
import Metadata from "@/components/Metadata";

// useLocalStorage from @uidotdev/usehooks is bugged

export default function Home({ size }) {
  const accent = useAtom(selectedAccent);
  console.log(accent);
  const [oobeState, setOobeState] = useLocalStorage("oobeState", false);
  const setAcc = useLocalStorage("AccColor");
  size = useWindowSize(200);

  const [layout, layoutSetter] = useState(true);
  useEffect(() => {
    if (typeof window == undefined) {
      return;
    }
    if (size.width >= 600) {
      layoutSetter(false);
    } else layoutSetter(true);
  }, [size]);

  return (
    <>
      <Metadata
        title="Presi300.com - A website"
        description="Yeah, it's a websie, I think"
        url="https://presi300.com"
        ogImage="https://i.imgur.com/c42Pg59.png"
      ></Metadata>
      {(oobeState && (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="dark:bg-light-wallpaper bg-dark-wallpaper"
        >
          {/* I am fully aware that there is a better way to do this and I'm too lazy to change it :) */}
          <AnimatePresence>
            {layout && (
              <motion.div
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed top-0 bottom-0 left-0 right-0"
                transition={{ type: "tween", duration: 0.4 }}
              >
                <MobileLayout accent={accent[0].color}></MobileLayout>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {!layout && (
              <motion.div
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0, scale: 1.5 }}
                transition={{ type: "tween", duration: 0.4 }}
                className="fixed top-0 bottom-0 left-0 right-0"
              >
                <DesktopLayout accent={accent[0].color}></DesktopLayout>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            className="absolute z-0 top-[7px] right-24"
            onClick={() => layoutSetter(!layout)}
          >
            <AnimatePresence>
              {layout && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  exit={{ opacity: 0, rotateZ: 180 }}
                  className="absolute"
                >
                  <FiMonitor></FiMonitor>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {!layout && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  exit={{ opacity: 0, rotateZ: -180 }}
                  className="absolute"
                >
                  <IoPhonePortraitOutline></IoPhonePortraitOutline>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      )) || <OOBE accent={accent[0].color}></OOBE>}
    </>
  );
}

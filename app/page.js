"use client";
import Image from "next/image";
import DesktopLayout from "./Layouts/Desktop/DesktopWM";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import AccentPicker from "./Apps/AppComponents/AccentPicker";
import MobileLayout from "./Layouts/Mobile/MobileWM";
import { motion, AnimatePresence } from "framer-motion";
import { FiMonitor } from "react-icons/fi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { useWindowSize } from "@uidotdev/usehooks";

export default function Home({ size }) {
  size = useWindowSize();

  const [layout, layoutSetter] = useState(true);
  useEffect(() => {
    if (size.width >= 500) {
      layoutSetter(false);
    } else layoutSetter(true);
  }, [size]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="dark:bg-light-wallpaper bg-dark-wallpaper"
    >
      <AnimatePresence>
        {layout && (
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 bottom-0 left-0 right-0"
            transition={{ type: "tween", duration: 0.4 }}
          >
            <MobileLayout></MobileLayout>
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
            <DesktopLayout></DesktopLayout>
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
  );
}

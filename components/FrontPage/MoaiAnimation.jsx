import React from "react";
import { motion } from "framer-motion";
import { selectedAccent } from "../Atoms";
import { useAtom } from "jotai";

export default function MoaiAnimation({}) {
  const atom = useAtom(selectedAccent);
  if (atom[0].color === "#9fa1a2") {
    var accent = "#4DAE51";
  } else {
    var accent = atom[0].color;
  }

  return (
    <div className="absolute z-0 w-screen h-screen overflow-hidden">
      <motion.img
        initial={{ opacity: 0, x: 100, y: 100 }}
        animate={{ opacity: 1, x: 0, y: 30 }}
        transition={{ delay: 3, duration: 5 }}
        className="fixed z-10 h-[60vh] transition-all min-h-[400px] bottom-[-50px] right-[-130px]"
        src="/icons/moai.svg"
      ></motion.img>

      <motion.div
        initial={{ scale: 0, rotate: 45 }}
        animate={{ scale: 3 }}
        transition={{ delay: 7.5, duration: 2 }}
        className="w-[40vw] h-[40vw] sm:w-[20vw]  sm:h-[20vw] absolute sm:bottom-[-10vw] sm:right-[-10vw]  bottom-[-20vw] right-[-20vw] rotate-[45deg] z-[3] bg-white dark:bg-sleepless-400 transition-all scale-[300%]"
      >
        <div
          className="w-full h-full transition-colors"
          style={{ backgroundColor: accent + "88" }}
        ></div>
      </motion.div>
      <motion.div
        initial={{ scale: 0, rotate: 45 }}
        animate={{ scale: 6 }}
        transition={{ delay: 8.5, duration: 4 }}
        className="w-[40vw] sm:w-[20vw] sm:h-[20vw] h-[40vw] absolute bottom-[-20vw] right-[-20vw] sm:bottom-[-10vw] sm:right-[-10vw]  rotate-[45deg] z-[2] bg-white dark:bg-sleepless-400 transition-all scale-[600%]"
      >
        <div
          className="w-full h-full transition-colors"
          style={{ backgroundColor: accent + "AA" }}
        ></div>
      </motion.div>
      {/*  */}
      <motion.div
        initial={{ scale: 0, rotate: 45 }}
        animate={{ scale: 9 }}
        transition={{ delay: 9.5, duration: 7 }}
        className="w-[40vw] sm:w-[20vw] sm:h-[20vw]  h-[40vw] absolute bottom-[-20vw] right-[-20vw] sm:bottom-[-10vw] sm:right-[-10vw] rotate-[45deg] z-[1] bg-white dark:bg-sleepless-400 transition-all scale-[900%]"
      >
        <div
          className="w-full h-full transition-colors"
          style={{ backgroundColor: accent + "CC" }}
        ></div>
      </motion.div>
      <motion.div
        initial={{ scale: 0, rotate: 45 }}
        animate={{ scale: 24 }}
        transition={{ delay: 14, duration: 12 }}
        className="w-[40vw] sm:w-[20vw] sm:h-[20vw]  h-[40vw] absolute bottom-[-20vw] right-[-20vw]sm:bottom-[-10vw] sm:right-[-10vw]  rotate-[45deg] z-[0] bg-white dark:bg-sleepless-400 transition-all scale-[1200%]"
      >
        <div
          className="w-full h-full transition-colors"
          style={{ backgroundColor: accent }}
        ></div>
      </motion.div>
    </div>
  );
}

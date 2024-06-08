import React from "react";
import { motion } from "framer-motion";
import ThemeSwitcher from "../ThemeSwitcher";

export default function OobePages({
  id,
  nextbtn,
  prevbtn,
  skipbtn,
  finishbtn,
}) {
  function Page1() {
    if (id === 1) {
      return (
        <div className="flex flex-col items-center">
          <img
            className="w-[150px] rounded-md shadow-md"
            src="Images/logo.png"
          ></img>
          <h1 className="pb-2">Welcome to Presi300.com!</h1>
          <h2 className="py-0">It's a... website</h2>
        </div>
      );
    }
  }
  function Page2() {
    if (id === 2) {
      return (
        <div className="flex flex-col items-center">
          <h1 className="pb-2">Choose your theme</h1>
          <ThemeSwitcher></ThemeSwitcher>
          <h2 className="py-0">
            You can always change it back in the settings!
          </h2>
        </div>
      );
    }
  }
  function Page3() {
    if (id === 3) {
      return (
        <div className="flex flex-col items-center">
          <h1 className="pb-2">This site works a little differently...</h1>
          <video
            src="Videos/PS-light.mp4"
            className="w-[400px] border-r-4 border-black border-l-4 rounded-lg"
            autoPlay={true}
            loop={true}
          ></video>
          <h2 className="py-0">It's a... website</h2>
        </div>
      );
    }
  }
  function Page4() {
    if (id === 4) {
      return <div>Test4</div>;
    }
  }

  const variants = {
    initial: {
      opacity: 0, // Element starts hidden (optional)
      x: "100%", // Element starts off-screen to the left (optional)
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2 }, // Adjust duration as desired
    },
    exit: {
      opacity: 0,
      x: "-100%", // Element exits off-screen to the right (optional)
      transition: { duration: 0.2 }, // Adjust duration as desired
    },
  };
  return (
    <div className="fixed w-screen h-screen dark:bg-sleepless-400 bg-sleepless-50 z-50 flex items-center sm:justify-center pt-32 sm:pt-0 flex-col">
      <motion.div
        variants={variants}
        animate={(id === 1 && "visible") || "exit"}
        key={1}
      >
        <Page1></Page1>
      </motion.div>
      <motion.div
        variants={variants}
        animate={
          (id === 2 && "visible") ||
          (id === 1 && "initial") ||
          (id === 3 && "exit")
        }
        key={2}
      >
        <Page2></Page2>
      </motion.div>

      <motion.div
        variants={variants}
        animate={
          (id === 3 && "visible") ||
          (id === 2 && "initial") ||
          (id === 4 && "exit")
        }
        key={3}
      >
        <Page3></Page3>
      </motion.div>

      <motion.div
        variants={variants}
        animate={(id === 4 && "visible") || "initial"}
        key={4}
      >
        <Page4></Page4>
      </motion.div>

      <div className="fixed flex flex-col gap-12 bottom-16 justify-center items-center">
        <div className="flex gap-12 absolute bottom-20">
          {id > 1 && <div>{prevbtn}</div>}
          {id < 4 && <div>{nextbtn}</div>}
        </div>
        {id === 1 && <div>{skipbtn}</div>}
        {id === 4 && <div>{finishbtn}</div>}
      </div>
    </div>
  );
}

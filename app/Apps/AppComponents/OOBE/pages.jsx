import React, { use } from "react";
import { motion } from "framer-motion";
import ThemeSwitcher from "../ThemeSwitcher";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { Children } from "react";

export default function OobePages({
  id,
  nextbtn,
  prevbtn,
  skipbtn,
  finishbtn,
  children,
}) {
  const [selectedFreature, selectedFeatureHandler] = useState(1);

  function Page({ children }) {
    return (
      <div className="flex flex-col w-full h-[60vh] justify-center items-center">
        {children}
      </div>
    );
  }

  const Features = [
    {
      vSrc: "DesktopExperience-Light.mp4",
      vSrcDark: "DesktopExperience-Dark.mp4",
      text: "It's just like a desktop!",
      id: 1,
    },
    {
      vSrc: "edgeSnappingReal-Light.mp4",
      vSrcDark: "edgeSnappingReal-Dark.mp4",
      text: "Edge tiling!",
      id: 2,
    },
  ];
  function FeatureShowcase({ videoSrc, videoSrcDark, text, key }) {
    return (
      <div key={key}>
        <div className="flex items-center gap-4 justify-center">
          <button
            onClick={() => {
              selectedFreature > 1 &&
                selectedFeatureHandler(selectedFreature - 1);
            }}
            className=""
          >
            <FaArrowLeft />
          </button>
          <video
            src={`Videos/${videoSrc}`}
            className="max-w-[600px] dark:hidden w-[80vw]  min-w-[200px] border-black rounded-lg"
            autoPlay={true}
            loop={true}
            muted={true}
          ></video>
          <video
            src={`Videos/${videoSrcDark}`}
            className="max-w-[600px] hidden dark:block w-[80vw] min-w-[200px] border-black rounded-lg"
            autoPlay={true}
            muted={true}
            loop={true}
          ></video>
          <button
            onClick={() => {
              selectedFreature < 2 &&
                selectedFeatureHandler(selectedFreature + 1);
            }}
            className=""
          >
            <FaArrowRight />
          </button>
        </div>

        <h2 className="py-0">{text}</h2>
      </div>
    );
  }

  function Page1() {
    if (id === 1) {
      return (
        <Page>
          <img
            className="w-[150px] rounded-md shadow-md"
            src="Images/logo.png"
          ></img>
          <h1 className="pb-2 pt-0">Welcome to Presi300.com!</h1>
          <h2 className="py-0">It's a... website</h2>
        </Page>
      );
    }
  }
  function Page2() {
    if (id === 2) {
      return (
        <Page>
          <h1 className="pb-2">Choose your theme</h1>
          <ThemeSwitcher></ThemeSwitcher>
          <h2 className="py-0">
            You can always change it back in the settings!
          </h2>
        </Page>
      );
    }
  }
  function Page3() {
    if (id === 3) {
      return (
        <Page>
          <h1 className="pt-0">This site works a little differently...</h1>
          <h2 className="p-0 pb-2">Here are some of the highlights</h2>
          <div className="flex  h-auto w-full items-center justify-center">
            {Features.map(({ vSrc, text, key, id, vSrcDark }) => (
              <div className="">
                {selectedFreature === id && (
                  <FeatureShowcase
                    key={key}
                    videoSrc={vSrc}
                    videoSrcDark={vSrcDark}
                    text={text}
                  ></FeatureShowcase>
                )}
              </div>
            ))}
          </div>
        </Page>
      );
    }
  }
  function Page4() {
    if (id === 4) {
      return (
        <Page>
          <div className="bg-black bg-opacity-20 backdrop-blur-xl shadow-lg p-4 rounded-md text-sleepless-50">
            <h1>Fully open source!</h1>
            <h2>
              See the inner workings for yourself on my{" "}
              <a
                className="px-1.5 underline"
                href="https://github.com/presi300/personal-site-v2"
              >
                {" "}
                GitHub
              </a>
              and
              <a
                className="px-1.5 underline "
                href="https://codeberg.org/presi300/personal-site-v2"
              >
                Codeberg.
              </a>
            </h2>
          </div>
        </Page>
      );
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
    <div
      className={`fixed w-screen h-screen bg-sleepless-50 dark:bg-sleepless-400 z-50 flex items-center ${id === 4 && "bg-dark-wallpaper dark:bg-light-wallpaper "}  flex-col `}
    >
      <div className="top-0 bottom-0 left-0 right-0 absolute backdrop-blur-xl pt-32">
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
      </div>

      <div className="fixed flex flex-col gap-12 bottom-[10vh] justify-center items-center">
        <div className="flex gap-12 absolute z-[100]">
          {id > 1 && id !== 4 && <div>{prevbtn}</div>}
          {id < 4 && <div>{nextbtn}</div>}
          {id === 4 && <div>{finishbtn}</div>}
        </div>
      </div>
      {id === 1 && <div className="absolute top-[10vh]">{skipbtn}</div>}
    </div>
  );
}

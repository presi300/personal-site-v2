"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useLocalStorage } from "@uidotdev/usehooks";
import OobePages from "../Apps/AppComponents/OOBE/pages";
import { motion } from "framer-motion";

export default function OOBE() {
  const [oobeState, setOobeState] = useLocalStorage("oobeState", false);
  const [id, idSetter] = useState(1);

  const prevbtn = (
    <button
      onClick={() => idSetter(id - 1)}
      className="rounded-full border-2 dark:border-sleepless-50 border-sleepless-300 p-2 mt-12 rotate-180"
    >
      <FaArrowRight></FaArrowRight>
    </button>
  );

  const nextbtn = (
    <button
      onClick={() => idSetter(id + 1)}
      className="rounded-full border-2 dark:border-sleepless-50 border-sleepless-300 p-2 mt-12"
    >
      <FaArrowRight></FaArrowRight>
    </button>
  );

  const skipbtn = (
    <button
      className="bg-gray-300 p-3 rounded-xl shadow-sm"
      onClick={() => setOobeState(true)}
    >
      Skip onboarding?
    </button>
  );
  return (
    <motion.div
      initial={{ scale: 0, borderRadius: "90px" }}
      animate={{ scale: 1, borderRadius: 0 }}
      transition={{ duration: 0.5 }}
      className="w-screen h-screen  shadow-xl"
    >
      <OobePages
        skipbtn={skipbtn}
        prevbtn={prevbtn}
        nextbtn={nextbtn}
        id={id}
      ></OobePages>
    </motion.div>
  );
}

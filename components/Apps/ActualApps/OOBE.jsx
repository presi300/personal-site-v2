import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import useLocalStorage from "@/components/hooks/useLocalStorage";
import OobePages from "../AppComponents/OOBE/pages";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function OOBE() {
  const [oobeState, setOobeState] = useLocalStorage("oobeState", false);
  const router = useRouter();
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
      className="text-sleepless-100 "
      onClick={() => {
        setOobeState(true);

        router.reload();
      }}
    >
      Skip onboarding?
    </button>
  );

  const finishbtn = (
    <button
      className="dark:border-sleepless-50 border-sleepless-300 border-2 p-2 rounded-full"
      onClick={() => {
        setOobeState(true);
        router.reload;
      }}
    >
      Begin!
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
        finishbtn={finishbtn}
        id={id}
      ></OobePages>
    </motion.div>
  );
}

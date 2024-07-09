import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import useLocalStorage from "@/components/hooks/useLocalStorage";
import OobePages from "../AppComponents/OOBE/pages";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Button from "../AppComponents/Button";

export default function OOBE({ accent }) {
  const [oobeState, setOobeState] = useLocalStorage("oobeState", false);
  const router = useRouter();
  const [id, idSetter] = useState(1);

  const prevbtn = (
    <Button clickfunc={() => idSetter(id - 1)}>
      <FaArrowRight className="rotate-180"></FaArrowRight>
    </Button>
  );

  const nextbtn = (
    <Button clickfunc={() => idSetter(id + 1)}>
      <FaArrowRight></FaArrowRight>
    </Button>
  );

  const skipbtn = (
    <Button
      clickfunc={() => {
        setOobeState(true);
        router.reload();
      }}
    >
      Skip onboarding?
    </Button>
  );

  const finishbtn = (
    <Button
      clickfunc={() => {
        setOobeState(true);
        router.reload();
      }}
    >
      Begin!
    </Button>
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
        accent={accent}
        id={id}
      ></OobePages>
    </motion.div>
  );
}

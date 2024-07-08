import React, { act } from "react";
import { FaRegCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
export default function NavBar({ homefunc, active }) {
  return (
    <div className="fixed z-20 bottom-5 left-0 right-0  flex justify-center">
      <AnimatePresence>
        {active && (
          <motion.button
            initial={{ y: 70 }}
            animate={{ y: 0 }}
            exit={{ y: 70 }}
            onClick={homefunc}
            className="bg-sleepless-75 p-1 rounded-full bg-opacity-30 backdrop-blur-lg"
          >
            <FaRegCircle size={30} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

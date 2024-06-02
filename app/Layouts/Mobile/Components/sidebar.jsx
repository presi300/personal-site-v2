import React from "react";
import { Children } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";

export default function SideBar({ children }) {
  const [sidebar, sidebarHandler] = useState(false);

  return (
    <div>
      {" "}
      <button
        className={`absolute top-0 left-0 h-[50px] z-20 dark:bg-sleepless-400 bg-sleepless-75 bg-opacity-100 backdrop-blur-xl transition-all flex items-center pl-2 dark:border-r`}
        style={{
          borderBottomRightRadius: sidebar ? "0px" : "40px",
          width: sidebar ? "70px" : "50px",
          paddingLeft: sidebar ? "25px" : "8px",
          paddingBottom: "8px",
        }}
        onClick={() => sidebarHandler(!sidebar)}
      >
        <RxHamburgerMenu size={17}></RxHamburgerMenu>
      </button>
      <AnimatePresence>
        {sidebar && (
          <motion.nav
            initial={{ x: -70 }}
            animate={{ x: 0 }}
            transition={{ type: "tween", duration: 0.15 }}
            exit={{ x: -70 }}
            className="fixed left-0 w-[70px] dark:bg-sleepless-400 bg-sleepless-75 top-[50px] bottom-[50px] z-10 pt-[10px] rounded-br-2xl dark:border-r dark:border-b"
          >
            {children}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}

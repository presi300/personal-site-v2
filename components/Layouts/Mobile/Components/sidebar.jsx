import React from "react";
import { Children } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";

export default function SideBar({ children, accent }) {
  const [sidebar, sidebarHandler] = useState(false);

  return (
    <div>
      {" "}
      <button
        className={`absolute top-0 left-0 h-[50px] z-20 dark:bg-sleepless-400 bg-sleepless-75 bg-opacity-100 backdrop-blur-xl dark:border-r transition-all`}
        style={{
          borderBottomRightRadius: sidebar ? "0px" : "40px",
          width: sidebar ? "70px" : "50px",
          borderColor: sidebar ? accent + "66" : accent,
        }}
        onClick={() => sidebarHandler(!sidebar)}
      >
        <div
          className="transition-all flex items-center w-full h-full pl-2"
          style={{
            backgroundColor: sidebar ? accent + "15" : "#00000000",
            paddingLeft: sidebar ? "25px" : "8px",
            paddingBottom: "8px",
            borderBottomRightRadius: sidebar ? "0px" : "40px",
          }}
        >
          <RxHamburgerMenu size={17}></RxHamburgerMenu>
        </div>
      </button>
      <AnimatePresence>
        {sidebar && (
          <motion.nav
            initial={{ x: -70 }}
            animate={{ x: 0 }}
            transition={{ type: "tween", duration: 0.15 }}
            exit={{ x: -70 }}
            style={{ borderColor: accent + "66" }}
            className="fixed left-0 w-[70px] dark:bg-sleepless-400 bg-sleepless-75 top-[50px] bottom-[50px] z-10  rounded-br-3xl dark:border-r dark:border-b"
          >
            <div
              className="w-full h-full rounded-br-3xl pt-[10px] transition-colors"
              style={{ backgroundColor: accent + "15" }}
            >
              {" "}
              {children}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}

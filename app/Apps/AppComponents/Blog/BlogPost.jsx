import React from "react";
import Markdown from "react-markdown";
import { Children } from "react";
import remarkGfm from "remark-gfm";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";

import "./posts.css";

export default function Post({
  title,
  dateCreated,
  frontImage,
  key,
  children,
}) {
  const [watched, isWatcher] = useState(false);
  return (
    <div className="w-full h-auto ">
      <div
        onClick={() => isWatcher(!watched)}
        className=" w-full gap-5 items-center relative z-10 justify-start flex p-8 hover:cursor-pointer hover:bg-slate-50 text-end dark:hover:bg-sleepless-300 bg-sleepless-50 dark:bg-sleepless-400"
      >
        <img
          className="hidden sm:block max-w-[200px] rounded-md shadow-lg dark:shadow-none shadow-sleepless-100"
          src={`/blog/postImages/${frontImage}`}
        ></img>
        <h1 className="mainTitle  text-start">{title}</h1>
        <p className="text-end">
          <MdKeyboardArrowDown
            className={`${watched ? "rotate-180" : "rotate-0"} transition-all`}
            size={30}
          ></MdKeyboardArrowDown>
        </p>
      </div>
      <div>
        <AnimatePresence>
          {watched && (
            <motion.div
              initial={{ y: -300, z: 0, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ z: 0, y: -300, opacity: 0 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="hover:bg-slate-50 w-full z-1 bg-slate-50 dark:hover:bg-sleepless-300 dark:bg-sleepless-300 px-5"
              onDoubleClick={() => isWatcher(!watched)}
            >
              <Markdown rehypePlugins={[remarkGfm]}>{children}</Markdown>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

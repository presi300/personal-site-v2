import React from "react";
// import Markdown from "react-markdown";
// import { Children } from "react";
// import remarkGfm from "remark-gfm";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { MdKeyboardArrowDown } from "react-icons/md";

export default function Post({
  title,
  frontImage,
  key,
  children,
  link,
  fullscreen = false,
}) {
  // const [watched, isWatcher] = useState(false);
  return (
    <div className="w-full flex justify-center">
      <a
        href={link}
        target={!fullscreen && "_blank"}
        className={`${
          fullscreen
            ? "w-[45vw] flex-col  "
            : "w-full flex-row-reverse justify-end"
        } flex  p-5 border-b border-[#3e404222] dark:border-[#3e404288] items-center hover:bg-[#3e404222]`}
      >
        {fullscreen ? (
          <h1 className="mainTitle text-start">{title}</h1>
        ) : (
          <h2 className="ml-5">{title}</h2>
        )}
        <div
          className={`${
            fullscreen ? "w-[40vw]" : "w-[70%] max-w-[290px]"
          } max-w-[500px] h-auto object-cover border border-[#3e404222] mt-2 rounded-xl`}
        >
          <img
            className="w-full h-full rounded-xl"
            src={`/blog/postImages/${frontImage}`}
          ></img>
        </div>
      </a>
    </div>
  );
}

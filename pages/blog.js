import React from "react";
import { TempPosts } from "@/components/Apps/AppComponents/Blog/PostsTemp";
import { useState } from "react";
import Post from "@/components/Apps/AppComponents/Blog/BlogPost";
import Metadata from "@/components/Metadata";
import SmallSettings from "@/components/SmallSettings";
import { CiSettings } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Blog = ({}) => {
  const [search, setSearch] = useState("");
  const [settings, toggleSettings] = useState(false);
  function SearchBar({}) {
    const onSearch = (event) => {
      setSearch(event.target.value);
    };
    return (
      <input
        className={`h-full rounded-lg px-2 bg-[#FFFFFF00] w-full focus:outline-none `}
        placeholder="Search posts..."
        type="text"
        value={search}
        autoFocus={true}
        onChange={onSearch}
      ></input>
    );
  }
  return (
    <>
      <Metadata
        url="https://presi300.com/blog "
        title="A blog"
        description="Presi300's amazing... incredible blog, yeah"
        ogImage=""
      ></Metadata>
      <AnimatePresence>
        {settings && (
          <motion.div
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed sm:top-16 sm:left-auto left-0 top-12 sm:right-3 right-0 sm:w-[400px] shadow-md w-full transition-all bg-sleepless-50 dark:bg-sleepless-400 p-7 rounded-lg"
          >
            <SmallSettings></SmallSettings>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-screen flex flex-col items-center gap-8 mt-16">
        {/* Top bar */}
        <nav className="backdrop-blur-xl py-1 fixed bg-sleepless-50 dark:bg-sleepless-300 bg-opacity-75 top-0 left-0 right-0 h-[50px] flex items-center sdfsdf justify-center">
          {" "}
          {/* Left */}
          <div className="w-full h-full flex items-center ">
            <Link className="flex items-center w-full gap-1  h-full " href="/">
              <img
                src="/images/logo.png"
                className="w-auto h-[25px] rounded-[4px] ml-3"
              ></img>
              <h4 className="font-semibold w-full pt-2  hidden  items-end sm:sm:flex">
                Presi300.com
              </h4>
            </Link>
          </div>
          {/* Middle */}
          <SearchBar></SearchBar>
          {/* Right */}
          <div className="w-full flex items-center h-full justify-end">
            <button onClick={() => toggleSettings(!settings)}>
              <CiSettings className="mr-3" size={30}></CiSettings>
            </button>
          </div>
        </nav>
        {TempPosts.map(({ Title, FrontImage, Link, ShortTitle, key }) => {
          if (
            Title.includes(search) ||
            ShortTitle.includes(search) ||
            search === ""
          ) {
            return (
              <div key={key} className="w-full max-w-[900px] pt-1">
                <Post
                  frontImage={FrontImage}
                  title={Title}
                  link={`/blog/${ShortTitle}`}
                  fullscreen={true}
                ></Post>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Blog;

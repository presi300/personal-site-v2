import React from "react";
import Link from "next/link";
// import { IoMdHome } from "react-icons/io";
// import { FaArrowLeft } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa";
// import { TempPosts } from "./PostsTemp";
// import { useRouter } from "next/router";
// import Button from "../Button";

export default function BlogOSD({ Title, ShortTitle }) {
  //   const router = useRouter();
  /* function NextPost() {
    if (TempPosts[postID + 1]) {
      router.push(`/blog/${TempPosts[postID + 1].ShortTitle}`);
    }
  }
  function PrevPost() {
    if (TempPosts[postID - 1]) {
      router.push(`/blog/${TempPosts[postID - 1].ShortTitle}`);
    }
  } */

  return (
    <nav className="w-full absolute top-0 left-0 right-0 dark:bg-sleepless-400 h-[50px] flex items-center px-3 ">
      <div className="w-full flex items-center">
        {" "}
        <h4 className="font-semibold pt-2 truncate w-full">
          Presi300.com/blog/{ShortTitle}
        </h4>
        <Link className="flex items-center  gap-1  h-full" href="/blog">
          <img
            src="/Images/logo.png"
            className="w-auto h-[30px] rounded-[4px] ml-3"
          ></img>
        </Link>
      </div>
    </nav>
  );
}

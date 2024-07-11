import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { TempPosts } from "./PostsTemp";
import { useRouter } from "next/router";
import Button from "../Button";

export default function BlogOSD({ Title, postID }) {
  const router = useRouter();
  function NextPost() {
    if (TempPosts[postID + 1]) {
      router.push(`/blog/${TempPosts[postID + 1].ShortTitle}`);
    }
  }
  function PrevPost() {
    if (TempPosts[postID - 1]) {
      router.push(`/blog/${TempPosts[postID - 1].ShortTitle}`);
    }
  }

  return (
    <nav className="w-full absolute top-0 left-0 right-0 dark:bg-slate-800 h-[50px] flex items-center px-3 ">
      <Button clickfunc={() => router.push("/blog")}>
        <IoMdHome></IoMdHome>
      </Button>
      <div className="w-full h-full flex items-center justify-center gap-3 pr-12">
        <Button clickfunc={() => PrevPost()}>
          <FaArrowLeft></FaArrowLeft>
        </Button>
        <h3 className="text-sleepless-500 dark:text-sleepless-50">{Title}</h3>
        <Button clickfunc={() => NextPost()}>
          <FaArrowRight></FaArrowRight>
        </Button>
      </div>
    </nav>
  );
}

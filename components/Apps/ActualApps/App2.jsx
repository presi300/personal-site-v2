import React from "react";
import { TempPosts } from "../AppComponents/Blog/PostsTemp";
import Post from "../AppComponents/Blog/BlogPost";
export default function TestApp2({}) {
  return (
    <div className=" w-full h-full flex-col flex transition-colors mt-1 items-center overflow-y-scroll justify-start bg-sleepless-50 dark:bg-sleepless-400">
      {TempPosts.map(({ Title, FrontImage, Link, key }) => (
        <div key={key} className="w-full max-w-[900px] ">
          <Post frontImage={FrontImage} title={Title} link={Link}></Post>
        </div>
      ))}
    </div>
  );
}

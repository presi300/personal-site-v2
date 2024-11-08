import React from "react";
import { TempPosts } from "../AppComponents/Blog/PostsTemp";
import Post from "../AppComponents/Blog/BlogPost";

export default function TestApp2({}) {
  return (
    <div className=" w-full h-full flex-col flex transition-colors items-center overflow-y-scroll justify-start bg-sleepless-50 dark:bg-sleepless-400">
      {TempPosts.map(({ Title, FrontImage, Link, ShortTitle, key }) => (
        <div key={key} className="w-full max-w-[900px] pt-1">
          <Post
            frontImage={FrontImage}
            title={Title}
            link={`/blog/${ShortTitle}`}
          ></Post>
        </div>
      ))}
    </div>
  );
}

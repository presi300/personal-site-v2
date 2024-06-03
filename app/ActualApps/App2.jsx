import React from "react";
import Post from "../Apps/AppComponents/Blog/BlogPost";
import PostMapper from "../Apps/AppComponents/Blog/PostMapper";
import { useEffect, useState } from "react";

export default function TestApp2({}) {
  const [posts, getPosts] = useState(null);
  useEffect(() => {
    window.onload = PostMapper().then((content) => getPosts(content));
  }, []);

  return (
    <div className=" w-full h-full flex-col flex transition-colors items-center overflow-y-scroll justify-start bg-sleepless-50 dark:bg-sleepless-400">
      <button onClick={() => console.log(posts)}>TEST</button>
      {posts &&
        posts.map(({ frontmatter, slug, content, image, key }) => (
          <div key={key} className="w-full max-w-[900px] ">
            <Post key={key} frontImage={image} title={slug}>
              {content}
            </Post>
          </div>
        ))}
    </div>
  );
}

import React from "react";
import { TempPosts } from "@/components/Apps/AppComponents/Blog/PostsTemp";
import { useState } from "react";
import Post from "@/components/Apps/AppComponents/Blog/BlogPost";

const Blog = ({}) => {
  const [search, setSearch] = useState("");
  const [searchBarFocus, setSearchBarFocus] = useState(false);
  function SearchBar({}) {
    const onSearch = (event) => {
      setSearch(event.target.value);
    };
    return (
      <input
        className={`h-[50px] left-0 right-0 top-0 transition-all fixed`}
        placeholder="Search posts..."
        type="text"
        value={search}
        autoFocus={true}
        onChange={onSearch}
        onMouseEnter={() => setSearchBarFocus(true)}
        onMouseLeave={() => setSearchBarFocus(false)}
      ></input>
    );
  }
  return (
    <div className="w-screen flex flex-col items-center gap-8 mt-16">
      <SearchBar></SearchBar>
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
  );
};

export default Blog;

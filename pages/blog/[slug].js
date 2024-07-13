import { useRouter } from "next/router";
import {
  TempPosts,
  PostMetadata,
} from "@/components/Apps/AppComponents/Blog/PostsTemp";
import Button from "@/components/Apps/AppComponents/Button";
import BlogOSD from "@/components/Apps/AppComponents/Blog/BlogOSD";
import Metadata from "@/components/Metadata";
import { useState, useEffect } from "react";

export default function Page() {
  const router = useRouter();

  if (router.isReady) {
    const slug = router.query.slug;
    const post = TempPosts.findIndex((e) => e.ShortTitle === slug);

    const MetadataKeys = Object.keys(PostMetadata);
    if (MetadataKeys.includes(slug)) {
      const MtTitle = PostMetadata[slug].Title;
      const MtLink = PostMetadata[slug].MtLink;
      return (
        <>
          <Metadata
            url={MtLink}
            title={MtTitle}
            description="TODO: Add post descriptions"
            ogImage={""}
          ></Metadata>
          <div className="overflow-hidden">
            {typeof window !== undefined && (
              <div className="w-screen h-screen pt-[50px] overflow-hidden">
                <BlogOSD
                  Title={TempPosts[post].Title}
                  ShortTitle={TempPosts[post].ShortTitle}
                ></BlogOSD>
                <iframe
                  className="w-screen h-full"
                  src={TempPosts[post].Link}
                ></iframe>
              </div>
            )}
          </div>
        </>
      );
    } else {
      return (
        <>
          <Metadata
            url="https://presi300.com/blog"
            title="Post not found :/"
            description="TODO: Add post descriptions"
            ogImage={""}
          ></Metadata>
          <div className="w-screen h-screen flex flex-col items-center justify-center">
            <h1>{`Oops... Post "${slug}" was not found.`}</h1>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button>
                Return to the <b>blog</b> page?
              </Button>
              <Button>
                Return to the <b>main</b> page?
              </Button>
            </div>
          </div>
        </>
      );
    }
  }
}

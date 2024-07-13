import { useRouter } from "next/router";
import { TempPosts } from "@/components/Apps/AppComponents/Blog/PostsTemp";
import Button from "@/components/Apps/AppComponents/Button";
import BlogOSD from "@/components/Apps/AppComponents/Blog/BlogOSD";
import Metadata from "@/components/Metadata";

export default function Page() {
  const router = useRouter();
  //   For some unexplained reason, router.query.slug returns undefined and then the actual slug, whenever it's called... So I have to check if slug actually exists before doing anything with it

  if (router.query.slug) {
    var post = TempPosts.findIndex((e) => e.ShortTitle === router.query.slug);

    return (
      <div className="overflow-hidden">
        <Metadata
          url={`${
            TempPosts[post]
              ? `https://presi300.com/blog/${TempPosts[post].ShortTitle} `
              : "https://presi300.com/blog"
          }`}
          title={TempPosts[post] ? TempPosts[post].Title : "Post not found :/"}
          description="TODO: Add post descriptions"
          ogImage={
            TempPosts[post]
              ? `/blog/postImages/${TempPosts[post].FrontImage}`
              : ""
          }
        ></Metadata>
        {(typeof window !== undefined && TempPosts[post] && (
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
        )) || (
          <div className="w-screen h-screen flex flex-col items-center justify-center">
            <h1>{`Oops... Post "${router.query.slug}" was not found.`}</h1>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button>
                Return to the <b>blog</b> page?
              </Button>
              <Button>
                Return to the <b>main</b> page?
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

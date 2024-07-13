import { withRouter } from "next/router";
import {
  TempPosts,
  PostMetadata,
} from "@/components/Apps/AppComponents/Blog/PostsTemp";
import Button from "@/components/Apps/AppComponents/Button";
import BlogOSD from "@/components/Apps/AppComponents/Blog/BlogOSD";
import Metadata from "@/components/Metadata";

function Page({ router }) {
  const { slug } = router.query;

  if (!router.isReady) {
    // I fcking give up on adding metadata per post, dynamic metadata in pages router is absolute cancer, maybe I'll revisit the idea some other day
    return (
      <>
        <Metadata
          url="https://presi300.com/blog"
          title="A blog"
          description="Presi300's amazing... incredible blog, yeah"
          ogImage="https://i.imgur.com/Z8S9E2j.png"
        ></Metadata>
        <div>Loading...</div>
      </>
    );
  }

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
        {typeof window !== undefined && (
          <div className="overflow-hidden">
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
          </div>
        )}
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
        {typeof window !== undefined && (
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
        )}
      </>
    );
  }
}

export default withRouter(Page);

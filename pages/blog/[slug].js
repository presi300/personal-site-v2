import { useRouter } from "next/router";
import { TempPosts } from "@/components/Apps/AppComponents/Blog/PostsTemp";
import Button from "@/components/Apps/AppComponents/Button";
import BlogOSD from "@/components/Apps/AppComponents/Blog/BlogOSD";
import Metadata from "@/components/Metadata";

export default function Page() {
  const router = useRouter();

  /*  const [slug, getSlug] = useState(null);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    getSlug(router.query.slug);
  }, [router.isReady]); */

  //   Pages router is fcking slow, so I have to check if it's ready before doing anything
  if (router.isReady) {
    const slug = router.query.slug;
    const post = TempPosts.findIndex((e) => e.ShortTitle === slug);

    return (
      <div className="overflow-hidden">
        <Metadata
          url={`https://presi300.com/blog/${TempPosts[post].ShortTitle}`}
          title={TempPosts[post].Title}
          description="TODO: Add post descriptions"
          ogImage={""}
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
      </div>
    );
  }
}

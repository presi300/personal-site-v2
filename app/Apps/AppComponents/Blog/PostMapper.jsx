"use server";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { join } from "path";
import { SanityClient } from "@/app/Sanity/client";
// Thanks https://github.com/ImRayy for this :)

const path = join(process.cwd(), "/public/blog/posts");

const imgPath = join(process.cwd() + "/public/blog/postImages");

export default async function PostMapper() {
  const files = readdirSync(path);
  const image = readdirSync(imgPath);
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = readFileSync(`${path}/${fileName}`);
    const { data: frontmatter, content: content } = matter(readFile);
    return {
      slug,
      frontmatter,
      content,
      image,
    };
  });

  return posts;
}

export async function SanityPostMapper() {
  const posts = await SanityClient.fetch(`*[_type == "document"]`);
  const blog = posts.map((post) => {
    const title = post.title;
    return title;
  });
  return posts;
}

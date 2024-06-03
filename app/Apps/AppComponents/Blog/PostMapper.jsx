"use server";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { join } from "path";
// Thanks https://github.com/ImRayy for this :)

const path = join(process.cwd() + "/public/Posts/");

const imgPath = join(process.cwd() + "/public/Images/PostImages/");

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

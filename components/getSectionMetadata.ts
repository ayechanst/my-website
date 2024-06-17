import matter from "gray-matter";
import { PostMetadata } from "./PostMetadata";
import fs from "fs";

const getSectionMetaData = (): PostMetadata[] => {
  const folder = "projects/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) =>
    file.endsWith(".md")
  );
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(
      `projects/${fileName}`,
      "utf8"
    );
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;
};

export default getSectionMetaData;
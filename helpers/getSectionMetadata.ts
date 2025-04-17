import matter from "gray-matter";
import fs from "fs";
import { PostMetadata } from "../components/PostPreview";

const getSectionMetadata = (
  route: string
): PostMetadata[] => {
  const folder = `${route}/`;
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
      folder: route,
      image: matterResult.data.image,
    };
  });
  return posts;
};

export default getSectionMetadata;

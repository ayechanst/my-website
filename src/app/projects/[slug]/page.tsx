import fs from "fs";
import Markdown from "markdown-to-jsx";
import { options } from "../../../../components/MarkdownComponents";
import matter from "gray-matter";
import getSectionMetaData from "../../../../components/getSectionMetadata";

const getPostContent = (slug: string) => {
  const folder = "projects/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getSectionMetaData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const Projects = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <h1>{post.data.title}</h1>
      <Markdown options={options}>{post.content}</Markdown>
    </div>
  );
};

export default Projects;

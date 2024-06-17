import fs from "fs";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import { options } from "../../../../components/MarkdownComponents";

const getPostContent = (slug: string) => {
  const folder = "projects/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  return content;
};

const Projects = (props: any) => {
  const slug = props.params.slug;
  const content = getPostContent(slug);
  return (
    <div>
      <div>projects. slug: {slug}</div>
      <Markdown options={options}>{content}</Markdown>
    </div>
  );
};

export default Projects;

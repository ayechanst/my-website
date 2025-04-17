import fs from "fs";
import Markdown from "markdown-to-jsx";
import { options } from "../../../../components/MarkdownComponents";
import matter from "gray-matter";
import getSectionMetaData from "../../../../helpers/getSectionMetadata";

const getPostContent = (slug: string) => {
  const folder = "projects/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getSectionMetaData("projects");
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const Projects = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <>
      <h1 className="text-3xl font-bold text-cyan-50 border-b border-cyan-900 pb-4 mb-6">
        {post.data.title}
      </h1>
      <article className="prose lg:prose-xl text-cyan-100">
        <Markdown options={options}>
          {post.content}
        </Markdown>
      </article>
    </>
  );
  // return (
  //   <div>
  //     <h1>{post.data.title}</h1>
  //     <article className="prose lg:prose-xl">
  //       <Markdown options={options}>
  //         {post.content}
  //       </Markdown>
  //     </article>
  //   </div>
  // );
};

export default Projects;

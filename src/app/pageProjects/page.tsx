import fs from "fs";
import Link from "next/link";

const getSectionMetaData = () => {
  const folder = "projects/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) =>
    file.endsWith(".md")
  );
  const slugs = markdownPosts.map((file) =>
    file.replace(".md", "")
  );
  return slugs;
};

const PageProjects = (props: any) => {
  const slug = props.params.slug;
  const sectionMetaData = getSectionMetaData();
  const sectionPreviews = sectionMetaData.map((slug) => {
    return (
      <div>
        <Link href={`/projects/${slug}`}>
          <h2>{slug}</h2>
        </Link>
      </div>
    );
  });

  return <div>{sectionPreviews}</div>;
};

export default PageProjects;

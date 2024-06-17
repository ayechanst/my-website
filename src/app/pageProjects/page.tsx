import Link from "next/link";
import getSectionMetaData from "../../../components/getSectionMetadata";

const PageProjects = () => {
  const sectionMetaData = getSectionMetaData();
  const sectionPreviews = sectionMetaData.map((post) => {
    return (
      <div>
        <Link
          href={`/projects/${post.slug}`}
          className="link-accent"
        >
          <h2>{post.title}</h2>
        </Link>
        <p>{post.subtitle}</p>
      </div>
    );
  });

  return <div>{sectionPreviews}</div>;
};

export default PageProjects;

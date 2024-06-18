import getSectionMetadata from "../../../components/getSectionMetadata";
import PostPreview from "../../../components/PostPreview";

const PageProjects = () => {
  const sectionMetadata = getSectionMetadata("projects");
  const sectionPreviews = sectionMetadata.map((post) => {
    return <PostPreview key={post.slug} {...post} />;
  });

  return <div>{sectionPreviews}</div>;
};

export default PageProjects;

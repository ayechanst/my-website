import getSectionMetaData from "../../../components/getSectionMetadata";
import PostPreview from "../../../components/PostPreview";

const PageProjects = () => {
  const sectionMetaData = getSectionMetaData();
  const sectionPreviews = sectionMetaData.map((post) => {
    return <PostPreview key={post.slug} {...post} />;
  });

  return <div>{sectionPreviews}</div>;
};

export default PageProjects;

import getSectionMetadata from "../helpers/getSectionMetadata";
import PostPreview from "./PostPreview";

const PostSection = () => {
  const sectionMetadata = getSectionMetadata("projects");
  const sectionPreviews = sectionMetadata.map((post) => {
    return <PostPreview key={post.slug} {...post} />;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sectionPreviews}
    </div>
  );
};
export default PostSection;

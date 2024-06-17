import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div>
      <Link
        href={`/projects/${props.slug}`}
        className="link-accent"
      >
        <h2>{props.title}</h2>
      </Link>
      <p>{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;

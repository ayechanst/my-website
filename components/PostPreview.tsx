import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="border border-secondary p-4 rounded-md shadow-md m-2">
      <Link href={`/${props.folder}/${props.slug}`}>
        <h2 className="font-bold hover:underline text-cyan-50 text-2xl">
          {props.title}
        </h2>
      </Link>
      <p className="text-cyan-100">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;

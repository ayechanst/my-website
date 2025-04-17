import Link from "next/link";

export interface PostMetadata {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
  folder: string;
}

const PostPreview = (props: PostMetadata) => {
  return (
    <Link
      href={`/${props.folder}/${props.slug}`}
      className="block"
    >
      <div className="w-full h-48 p-4 rounded-xl shadow-lg hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 cursor-pointer flex flex-col justify-between">
        <div>
          <h2 className="font-bold text-accent text-2xl mb-2">
            {props.title}
          </h2>
          <p className="text-accent line-clamp-3">
            {props.subtitle}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;

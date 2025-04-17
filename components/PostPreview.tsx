import Link from "next/link";

export interface PostMetadata {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
  folder: string;
  image: string;
}

const PostPreview = (props: PostMetadata) => {
  return (
    <Link
      href={`/${props.folder}/${props.slug}`}
      className="block m-3"
    >
      <div className="card bg-base-100 w-96 shadow-lg hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 cursor-pointer">
        <figure>
          <img src={props.image} alt={props.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p className="text-accent line-clamp-3">
            {props.subtitle}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;

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
      <div className="group card bg-base-100 h-[400px] w-96 shadow-lg hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 cursor-pointer">
        <figure className="h-[300px] overflow-hidden">
          <img src={props.image} alt={props.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p className="text-accent line-clamp-3">
            {props.subtitle}
          </p>
          <p className="group-hover:text-secondary transition-colors duration-200">
            Read More {`>`}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;

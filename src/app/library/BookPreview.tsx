interface BookProps {
  title: string;
  author: string;
  rating: string;
  link: string;
}

const BookPreview = ({
  title,
  author,
  rating,
  link,
}: BookProps) => {
  return (
    <div className="border-t p-2 m-1">
      <div className="font-extrabold">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer" // for security reasons
        >
          {title}
        </a>
      </div>
      <ul>
        <li>- {author}</li>
        <li>- {rating}</li>
      </ul>
    </div>
  );
};

export default BookPreview;

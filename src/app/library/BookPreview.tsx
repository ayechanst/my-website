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
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Recommended for security reasons
        >
          {title}
        </a>
      </div>
      <div>
        <div>{author}</div>
        <div>{rating}</div>
      </div>
    </div>
  );
};

export default BookPreview;

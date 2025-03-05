interface BookProps {
  title: string;
  author: string;
  rating: string;
}

const BookPreview = ({
  title,
  author,
  rating,
}: BookProps) => {
  return (
    <div className="border-t p-2 m-1">
      <div
        className="font-bold"
        //   onClick={}
      >
        {title}
      </div>
      <div>
        <div>{author}</div>
        <div>{rating}</div>
      </div>
    </div>
  );
};

export default BookPreview;

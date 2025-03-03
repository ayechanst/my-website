interface BookProps {
  title: string;
  author: string;
}

const BookPreview = ({ title, author }: BookProps) => {
  return (
    <div className="border-t p-2 m-1">
      <div className="font-bold">{title}</div>
      <div>{author}</div>
    </div>
  );
};

export default BookPreview;

interface BookProps {
  title: string;
  author: string;
}

const BookPreview = ({ title, author }: BookProps) => {
  return (
    <div>
      <div>{author}</div>
      <div>{title}</div>
    </div>
  );
};

export default BookPreview;

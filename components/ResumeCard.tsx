type ResumeCardProps = {
  title: string;
  file: string;
  description: string;
};

const ResumeCard = ({
  title,
  file,
  description,
}: ResumeCardProps) => {
  return (
    <div className="card bg-base-100 w-80 shadow-lg hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 cursor-pointer">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm text-neutral-content">
          {description}
        </p>
        <div className="card-actions mt-4">
          <a
            href={`/${file}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Resume
          </a>
          {/* {if (title == '')} */}
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;

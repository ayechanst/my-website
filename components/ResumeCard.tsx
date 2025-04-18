type ResumeCardProps = {
  title: string;
  file: string;
};

const ResumeCard = ({ title, file }: ResumeCardProps) => {
  return (
    <div>
      <a
        href={`/${file}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-base-100 hover:bg-base-200 shadow-md rounded-xl p-4 text-center transition duration-200 w-64"
      >
        <span className="font-semibold">{title}</span>
      </a>
    </div>
  );
};

export default ResumeCard;

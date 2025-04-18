// type ResumeCardProps = {
//   title: string;
//   file: string;
//   // description: string;
// };

// const ResumeCard = ({
//   title,
//   file,
// }: // description,
// ResumeCardProps) => {
//   return (
//     <div>
//       <a
//         href={`/${file}`}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-base-100 hover:bg-base-200 shadow-md rounded-xl p-4 text-center transition duration-200 w-64"
//       >
//         <span className="font-semibold">{title}</span>
//         {/* <p className="text-sm text-neutral-content mb-4">
//           {description}
//         </p> */}
//       </a>
//     </div>
//   );
// };

// export default ResumeCard;
type ResumeCardProps = {
  title: string;
  file: string;
  description: string;
  image?: string;
};

const ResumeCard = ({
  title,
  file,
  description,
  image,
}: ResumeCardProps) => {
  return (
    <div className="card bg-base-100 w-80 shadow-sm">
      {image && (
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt={title}
            className="rounded-xl"
          />
        </figure>
      )}
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
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;

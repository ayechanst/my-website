import Link from "next/link";

const Divider = () => {
  return (
    <>
      <div className="flex w-full flex-col lg:flex-row">
        <Link
          href="/personal"
          className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center"
        >
          Personal Inquiry
        </Link>
        <div className="divider lg:divider-horizontal">
          OR
        </div>
        <Link
          href="/professional"
          className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center"
        >
          Professional Inquiry
        </Link>
      </div>
    </>
  );
};

// For person inquiry: library, book reviews, essays, advice i'd tell myself, my story, favorite games. life philosophy, role models, who am i made out of. mbti, jung

// professional: projects, documentations, resume, work experience.

export default Divider;

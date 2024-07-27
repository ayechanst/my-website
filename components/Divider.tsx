const Divider = () => {
  return (
    <>
      <div className="flex w-full flex-col lg:flex-row">
        <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">
          Personal Inquiry
        </div>
        <div className="divider lg:divider-horizontal">
          OR
        </div>
        <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">
          Professional Inquiry
        </div>
      </div>
    </>
  );
};

// For person inquiry: library, book reviews, essays, advice i'd tell myself, my story, favorite games. life philosophy, role models, who am i made out of. mbti, jung

// professional: projects, documentations, resume, work experience.

export default Divider;

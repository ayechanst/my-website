import ResumeCard from "../../../components/ResumeCard";

const HireMe = () => {
  return (
    <div className="bg-primary-content flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-10">
        Diverse Work Experience
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ResumeCard
          title="Fullstack Resume"
          file="Resume-2025.pdf"
          description="I've built many applications and decentralized applications with Next.js, React, and Tailwind. I built the backends as well, using Solidity smart contracts or open source data bases like Firebase."
        />
        <ResumeCard
          title="Developer Relations Resume"
          file="Resume-DevRel.pdf"
          description="My philosophy skills come in very handy whether I'm writting technical docs, empathetically explaining tools and concepts to developers, or just using deductive logic to debbug someone's problem."
        />
        <ResumeCard
          title="Non-Tech Resume"
          file="Resume-nonTech.pdf"
          description="Before working in tech, I've delt with customers at a front desk, I've done manual labor, and I assembled multi-hundred thousand dollar scientific instruments for the Ivy League schools and the US Military."
        />
      </div>
      <div className="card bg-base-100 w-[28rem] shadow-sm m-8  hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 cursor-pointer">
        <div className="card-body">
          <h2 className="card-title">
            Why Hire a Philosophy Major?
          </h2>
        </div>
        <figure>
          <img
            src="/socrates.png"
            alt="The philosopher Socrates, reimagined by Magic the Gathering artist"
          />
        </figure>
        <div className="card-body">
          <p>
            Before the primary disciplines of school had
            their own names (math, science, history,
            language arts), they all fell under the umbrella
            of philosophy. They still do to this day, but
            people forget what these disciplines are founded
            on.
          </p>
          <div className="mb-2">
            <b>The perfect framework for learning</b>
            <p>
              Philosophy is about asking questions, building
              mental models to dissect, and seeing where the
              model goes wrong. This rinse repeat process of
              understanding, reasoning, and improving
              systems makes people trained in philosophy
              capable of learning and understanding new
              topics quickly.
            </p>
          </div>
          <div className="mb-2">
            <b>Math and Logic</b>
            <p>
              Philosophy is the strongest non-liberal art
              degree in the liberal arts department. Classes
              like Modern Logic uses symbols to reason about
              statements, identically to logic gates in
              computers. Other classes like critical
              thinking involve breaking written statements
              down into symbols, and evaluating the truth of
              a statement with hard logic.
            </p>
          </div>
          <div className="mb-2">
            <b>Reading, Writing, and Communication</b>
            <p>
              It's no secret programming involves a lot of
              reading, both of code and technical
              documentation. Philosophy students are trained
              on reading, understanding, then writing about
              what they've read. In a professional setting,
              reading and understanding is essential in any
              job. Writing and communicating clearly is
              something philosophy students train the most.
              The lack of ambiguity is what makes philosophy
              students shine in law, technical writing, team
              settings, and customer service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireMe;

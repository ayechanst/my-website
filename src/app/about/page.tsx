import ResumeCard from "../../../components/ResumeCard";

const About = () => {
  return (
    <div className="bg-primary-content flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">
        About this website
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ResumeCard
          title="Fullstack Resume"
          file="Resume-2025.pdf"
        />
        <ResumeCard
          title="Developer Relations Resume"
          file="Resume-DevRel.pdf"
        />
        {/* <ResumeCard title="AI/ML Resume" file="ai-ml.pdf" /> */}
      </div>
    </div>
  );
  //   return (
  //     <div className="bg-primary-content flex flex-col">
  //       <div>About this website</div>
  //     </div>
  //   );
};

export default About;

import ResumeCard from "../../../components/ResumeCard";

const HireMe = () => {
  return (
    <div className="bg-primary-content flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">Resumes:</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ResumeCard
          title="Fullstack Resume"
          file="Resume-2025.pdf"
        />
        <ResumeCard
          title="Developer Relations Resume"
          file="Resume-DevRel.pdf"
        />
      </div>
    </div>
  );
};

export default HireMe;

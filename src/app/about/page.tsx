// import Link from "next/link";
// import PostSection from "../../components/PostSection";

import ResumeCard from "../../../components/ResumeCard";

const About = () => {
  return (
    <div className="bg-primary-content flex flex-col">
      <div>About this website</div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
        <ResumeCard src="/Resume-2025.pdf" />
        <ResumeCard src="/Resume-DevRel.pdf" />
        {/* <ResumeCard src="/resumes/resume3.pdf" /> */}
      </div>
    </div>
  );
};

export default About;

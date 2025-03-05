"use client";
import { useRouter } from "next/navigation";

const ProfessionalPage = () => {
  const router = useRouter();
  return (
    <>
      <div
        className="text-2xl"
        onClick={() => router.push("/pageProjects")}
      >
        Projects
      </div>
    </>
  );
};

export default ProfessionalPage;

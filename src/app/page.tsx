import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-primary-content">
      <div className="flex flex-col max-h-full space-y-4">
        <Link
          href="/pageProjects"
          className="link font-bold text-2xl"
        >
          Projects
        </Link>
        <Link
          href="/pageExperiences"
          className="link font-bold text-2xl"
        >
          Experiences
        </Link>
        <Link
          href="/pageBlogs"
          className="link font-bold text-2xl"
        >
          Blogs
        </Link>
      </div>
    </div>
  );
};

export default Home;

import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-primary-content ">
      <h1>Overview</h1>
      <p>This is my overview</p>
      <div className="flex flex-col max-h-full">
        <Link href="/pageProjects" className="link">
          Projects
        </Link>
        <Link href="/pageExperiences" className="link">
          Experiences
        </Link>
        <Link href="/pageBlogs" className="link">
          Blogs
        </Link>
      </div>
    </div>
  );
};

export default Home;

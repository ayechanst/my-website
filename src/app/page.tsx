import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col">
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

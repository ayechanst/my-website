import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-primary-content">
      <div className="py-5">
        <div className="pb-1 text-3xl font-bold">
          Welcome :)
        </div>
        <div>
          I'm Aye Chan. I graduated in philosophy, taught
          myself to program, and now I educate in Web3.
          Check out my projects and blogs.
        </div>
      </div>
      <div className="flex flex-col max-h-full space-y-4">
        <Link
          href="/pageProjects"
          className="link font-bold text-xl"
        >
          Projects
        </Link>
        <Link
          href="/pageExperiences"
          className="link font-bold text-xl"
        >
          Experiences
        </Link>
        <Link
          href="/pageBlogs"
          className="link font-bold text-xl"
        >
          Blogs
        </Link>
      </div>
    </div>
  );
};

export default Home;

import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-primary-content max-h-full">
      <div className="py-5 flex">
        <div className="">
          <img
            src={"/profile.jpeg"}
            alt="my face turned to the side"
            className="w-34 h-auto rounded-lg"
          />
        </div>
        <div className="m-5">
          <div className="pb-1 text-3xl font-bold">
            Welcome :)
          </div>
          <div>
            I'm Aye Chan. I graduated in philosophy, taught
            myself to program, and now I educate in Web3.
            Check out my projects and blogs.
          </div>
        </div>
      </div>
      <div className="flex flex-col max-h-full space-y-20 mt-8">
        <div>
          <Link
            href="/pageProjects"
            className="link font-bold text-xl"
          >
            Programming Projects
          </Link>
          <div>A list of my projects</div>
        </div>
        <Link
          href="/pageBlogs"
          className="link font-bold text-xl"
        >
          Blogs
        </Link>
        <div className="link font-bold text-xl">Videos</div>
        <div className="link font-bold text-xl">Resume</div>
      </div>
    </div>
  );
};

export default Home;

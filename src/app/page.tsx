import Link from "next/link";
import QuickLinks from "../../components/QuickLinks";
import Divider from "../../components/Divider";

const Home = () => {
  return (
    <div className="bg-primary-content max-h-full">
      <div className="p-5 flex">
        <div className="avatar">
          <div className="w-34 rounded-xl">
            <img
              src={"/profile.jpeg"}
              alt="my face turned to the side"
              // className="w-34 h-auto rounded-lg"
            />
          </div>
        </div>
        <div>
          <div className="m-5 pb-1 text-3xl font-bold">
            Welcome :)
          </div>
          <div className="m-5 flex flex-col items-center">
            <div className="pb-4">
              I'm Aye Chan (that's my first name), I'm
              primarily a programmer, and an aspiring
              developer advocate.
            </div>
            <div>
              Other than that, I'm an explorer of the human
              condition, a writer, a reader, a thinker, an
              executor, and above all... a typical life
              enjoyer.
            </div>
            <QuickLinks />
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="py-5">
          Now... are you here on business or for fun?
        </div>
        <Divider />
      </div>
      {/* <div className="flex flex-col max-h-full space-y-20 mt-8">
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
      </div> */}
    </div>
  );
};

export default Home;

import PostSection from "../../components/PostSection";

const Home = () => {
  return (
    <div className="bg-primary-content max-h-full">
      <div className="p-5 flex">
        <div>
          <div className="m-5 pb-1 text-3xl font-bold">
            Briding the Gap Between Tech and Humans
          </div>
          <div className="m-5 flex flex-col items-center">
            <div className="pb-4">
              Philosophy x Programming
            </div>
          </div>
        </div>
      </div>
      <PostSection />
    </div>
  );
};

export default Home;

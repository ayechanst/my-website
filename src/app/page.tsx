import PostSection from "../../components/PostSection";

const Home = () => {
  return (
    <div className="bg-primary-content flex flex-col">
      <div className="p-5 flex justify-center">
        <div>
          <div className="m-2 text-5xl font-bold">
            Entropy
          </div>
          <div className="m-5 flex flex-col items-center">
            <div className="pb-4">
              Briding the Gap Between Tech and Humans
            </div>
          </div>
        </div>
      </div>
      <PostSection />
    </div>
  );
};

export default Home;

import fs from "fs";

const getSectionMetaData = () => {
  const folder = "sections/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) =>
    file.endsWith(".md")
  );
  const slugs = markdownPosts.map((file) =>
    file.replace(".md", "")
  );
  return slugs;
};

const Home = () => {
  const sectionMetaData = getSectionMetaData();
  const sectionPreviews = sectionMetaData.map((slug) => (
    <div>
      <h2>{slug}</h2>
    </div>
  ));
  return (
    <div>
      Hello
      <div>{sectionPreviews}</div>
    </div>
  );
};

export default Home;

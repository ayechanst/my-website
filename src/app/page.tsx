import fs from "fs";
import Link from "next/link";

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
  const sectionPreviews = sectionMetaData.map((slug) => {
    return (
      <div>
        <Link href={`/sections/${slug}`}>
          <h2>{slug}</h2>
        </Link>
      </div>
    );
  });
  return (
    <div>
      {/* Hello
      <div>{sectionPreviews}</div> */}
      <button className="btn btn-wide">Wide</button>
    </div>
  );
};

export default Home;

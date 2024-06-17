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
      <div className="flex flex-col">
        <Link href="/projects">Projects</Link>
        <Link href="/experiences">Experiences</Link>
        <Link href="/blogs">Blogs</Link>
      </div>
    </div>
  );
};

export default Home;

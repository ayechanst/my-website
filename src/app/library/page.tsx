import BookPreview from "./BookPreview";

const Library = () => {
  const bookArray = [
    {
      title:
        "The Red Queen, Sex and the Evolution of Human Nature",
      author: "Matt Ridley",
    },
    {
      title:
        "The Right to Sex, Feminism in the Twenty-First Century",
      author: "Amia Srinivasan",
    },
    {
      title: "King Warrior Magician Lover",
      author: "Robert Moore & Douglas Gillette",
    },
    {
      title: "The History of Money",
      author: "Jack Weatherford",
      class: "Social Science, finance, money (HG231.W4)",
    },
    {
      title:
        "Other Minds: The Octopus, the Sea, and the Deep Origins of Consciousness",
      author: "Peter-Godfrey-Smith",
    },
    {
      title: "Children of Time",
      author: "Adrian Tchaikovsky",
    },
    {
      title: "Genghis Khan",
      author: "Jack Weatherford",
    },
    {
      title:
        "The Conspiracy Against the Human Race: A Contrivance of Horror",
      author: "Thomas Ligotti",
      class:
        "Language and Literature, Literature(general), Theory . Philosophy . Esthetics (PN56)",
    },
  ];

  return (
    <>
      <div>
        <h3>Books</h3>
        <div>
          {bookArray.map((book, index) => (
            <div key={index}>
              <div className="flex">
                <BookPreview
                  title={book.title}
                  author={book.author}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Library;

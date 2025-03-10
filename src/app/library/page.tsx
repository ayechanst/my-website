"use client";
import { useState } from "react";
import BookPreview from "./BookPreview";
import { bookArray } from "./books";

const Library = () => {
  const [filter, setFilter] = useState("all");
  console.log("filter: ", filter);

  const filteredBooks =
    filter === "all"
      ? bookArray
      : bookArray.filter((book) =>
          book.genre.includes(filter)
        );

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="join">
          <input
            className="join-item btn"
            type="radio"
            name="options"
            aria-label="All"
            onClick={() => setFilter("all")}
          />
          <input
            className="join-item btn"
            type="radio"
            name="options"
            aria-label="Science"
            onClick={() => setFilter("science")}
          />
          <input
            className="join-item btn"
            type="radio"
            name="options"
            aria-label="History"
            onClick={() => setFilter("history")}
          />
          <input
            className="join-item btn"
            type="radio"
            name="options"
            aria-label="Philosophy"
            onClick={() => setFilter("philosophy")}
          />
          <input
            className="join-item btn"
            type="radio"
            name="options"
            aria-label="Fiction"
            onClick={() => setFilter("fiction")}
          />
          <input
            className="join-item btn"
            type="radio"
            name="options"
            aria-label="Skill Building"
            onClick={() => setFilter("skill building")}
          />
        </div>
        <div>
          {filteredBooks.map((book, index) => (
            <div key={index}>
              <div className="flex">
                <BookPreview
                  title={book.title}
                  author={book.author}
                  rating={book.rating}
                  link={book.link}
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

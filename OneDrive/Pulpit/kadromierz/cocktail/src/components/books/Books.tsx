import "./books.scss";
import useBookSearch from "../../useBookSearch";
import { useState } from "react";
import Tile, { Book } from "../Tile.tsx/Tile";

function Books() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, books, setOffset, offset } = useBookSearch(
    query,
    pageNumber
  );
  const handleSearch = (e: any) => (setQuery(e.target.value), setPageNumber(1));

  const handleScroll = (e: any) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      setOffset(offset + 10);
    } else return;
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <>
      <div className="books" onChange={handleScroll}>
        <div className="input">
          <label>
            Write a title or author:
            <input type="text" onChange={handleSearch} value={query} />
          </label>
        </div>
        <ul className="list">
          {books.map((book: Book, index, books) => {
            if (books.length === index + 1) {
              return (
                <li
                  className="book"
                  key={`${book.authorKey} + ${book.publishDate}`}
                >
                  <Tile book={book} />
                </li>
              );
            } else {
              return (
                <li className="book">
                  <Tile
                    book={book}
                    key={`${book.authorKey} + ${book.publishDate}`}
                  />
                </li>
              );
            }
          })}
        </ul>
        <div className="loading">{loading && "loading..."}</div>
        <div className="loading">{!loading && "nothing to see here..."}</div>
        <div className="error">{error && "error"}</div>
      </div>
    </>
  );
}

export default Books;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushFavourites, removeFromFavourites } from "../../bookSlice";
import "./tile.scss";

export interface TileSummary {
  id: number | undefined;
  title: string;
  author: string[];
  publishDate: string[];
  book: Book;
  key: string;
  authorKey: string;
  workKey: string;
  isLocal: boolean;
}

export interface Book {
  id: number | undefined;
  title: string;
  author: string[];
  publishDate: string[];
  key: string;
  authorKey: string;
  workKey: string;
  isLocal: boolean;
}

export interface SavedBook extends Book {
  isLocal: boolean;
}

function Tile(props: any) {
  const dispatch = useDispatch();
  const [color, setColor] = useState(false);

  const handleFavourites = () => {
    if (!props.book.isLocal) {
      dispatch(pushFavourites({ ...props.book, isLocal: true }));
      setColor(!color);
    } else {
      dispatch(removeFromFavourites({ ...props.book, isLocal: false }));
      setColor(!color);
    }
  };

  const addButton = useSelector((state: SavedBook) => state.isLocal);

  return (
    <div className="tile">
      <div className="img">
        {props.book.id ? (
          <img
            src={`https://covers.openlibrary.org/b/id/${props.book.id}-M.jpg`}
            alt="Cannot find image!"
          />
        ) : (
          `cannot find cover`
        )}
      </div>
      <div className="details">
        <ul>
          <li>
            <p>Author:</p>

            <a
              className="tooltip"
              href={`https://openlibrary.org/authors/${props.book.authorKey}`}
            >
              {props.book.author?.join(", ")}
              <span className="tooltiptext">Check this author!</span>
            </a>
          </li>
          <li>
            <p>Title:</p>

            <a
              className="tooltip"
              href={`https://openlibrary.org/${props.book.workKey}`}
            >
              {props.book.title}
              <span className="tooltiptext">Check this book!</span>
            </a>
          </li>
          <li>
            <p>First publication:</p>
            {props.book.publishDate?.[0]}
          </li>
        </ul>
        <div className="add" onClick={handleFavourites}>
          {!color && !addButton ? (
            <p style={{ color: "green" }}>+</p>
          ) : (
            <p style={{ color: "red" }}>-</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tile;

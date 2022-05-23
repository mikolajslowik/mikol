import "./favourites.scss";
import { Book } from "../Tile.tsx/Tile";
import Tile from "../Tile.tsx/Tile";
import { useSelector } from "react-redux";
import { InitialStateSummary } from "../../bookSlice";
import { useDispatch } from "react-redux";
import { clear } from "../../bookSlice";

export function Favourites() {
  const dispatch = useDispatch();

  const favouritesBooks = useSelector(
    (state: { book: InitialStateSummary }) => state.book.favourites
  );

  return (
    <div className="favourites">
      <ul className="list">
        {favouritesBooks?.map((book: Book) => {
          return <Tile book={book} />;
        })}
      </ul>
      <button className="resetFavourites" onClick={() => dispatch(clear())}>
        clear all
      </button>
    </div>
  );
}

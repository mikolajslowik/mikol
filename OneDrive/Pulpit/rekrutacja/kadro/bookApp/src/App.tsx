import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { consumeLocalStorage } from "./bookSlice";
import Books from "./components/books/Books";
import Contact from "./components/contact/Contact";
import { Favourites } from "./components/favourites/Favourites";

import Homepage from "./components/homepage/Homepage";
import Navigation from "./components/navigation/Navigation";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(consumeLocalStorage());
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;

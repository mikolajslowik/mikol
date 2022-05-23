import { NavLink, useMatch } from "react-router-dom";
import "./navigation.scss";

function Navigation() {
  const navTags = [
    {
      title: "homepage",
      path: "/",
    },
    {
      title: "books",
      path: "/books",
    },
    {
      title: "favourites",
      path: "/favourites",
    },
    {
      title: "contact",
      path: "/contact",
    },
  ];

  return (
    <div className="navigation">
      <div className="logo">HTMElo</div>
      <nav className="nav">
        {navTags.map((tag) => {
          return (
            <NavLink className="navLink" to={`${tag.path}`} key={tag.title}>
              {tag.title}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}

export default Navigation;

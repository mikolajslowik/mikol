import Dropdown from "./Dropdown";

import { useState, useEffect, useRef } from "react";

const MenuItems = ({ singleMenuFile, key, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 600 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 600 && setDropdown(false);
  };

  const dropdownHandler = () => {
    setDropdown(!dropdown);
  };
  console.log(singleMenuFile);
  return (
    <li
      className="menu-items"
      key={key}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {singleMenuFile.submenu ? (
        <div>
          <button type="button" onClick={dropdownHandler}>
            {singleMenuFile.title}{" "}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <Dropdown
            singleMenuFile={singleMenuFile}
            dropdown={dropdown}
            dropdownHandler={dropdownHandler}
            depthLevel={depthLevel}
          />
        </div>
      ) : (
        <a href="/#"> {singleMenuFile.title}</a>
      )}
    </li>
  );
};

export default MenuItems;

import MenuItems from "./MenuItems";

const Dropdown = ({ singleMenuFile, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <>
      <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
        {singleMenuFile.submenu.map((singleMenuFile, index) => (
          <MenuItems
            singleMenuFile={singleMenuFile}
            key={index}
            depthLevel={depthLevel}
          />
        ))}
      </ul>
    </>
  );
};

export default Dropdown;

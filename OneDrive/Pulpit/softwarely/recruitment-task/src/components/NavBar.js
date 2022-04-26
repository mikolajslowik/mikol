import { menuFiles } from "../components/data";
import MenuItems from "./MenuItems";

const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {menuFiles.map((singleMenuFile, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              singleMenuFile={singleMenuFile}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

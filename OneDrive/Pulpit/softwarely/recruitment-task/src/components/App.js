import Navbar from "./NavBar";
import "../App.scss";
const App = () => {
  return (
    <header>
      <div className="nav-area">
        {" "}
        <a href="/#" className="logo">
          Logo
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default App;

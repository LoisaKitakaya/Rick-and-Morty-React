import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar has-background-light" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <p className="is-size-4">Rick and Morty</p>
        </Link>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <Link to="/characters" className="navbar-item">
            Characters
          </Link>
          <Link to="/locations" className="navbar-item">
            Locations
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

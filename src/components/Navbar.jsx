import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex h-12 bg-red-300 px-3 justify-between items-center sticky top-0">
      <h1>A</h1>
      <nav>
        <ul className="flex gap-3">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return { color: isActive ? "Blue" : "Green" };
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => {
                return { color: isActive ? "Blue" : "Green" };
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/projects"
              style={({ isActive }) => {
                return { color: isActive ? "Blue" : "Green" };
              }}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => {
                return { color: isActive ? "Blue" : "Green" };
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

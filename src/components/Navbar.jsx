import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="container mx-auto flex py-4 px-3 justify-between items-center sticky top-0 bg-[#0c2540] ">
      <h1 className="font-bold text-2xl  round-full p-[4px] border-2">
        <Link to="/">AP</Link>
      </h1>
      <nav>
        <ul className="flex gap-3">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return { color: isActive ? "#fff" : "#a6c7e5" };
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => {
                return { color: isActive ? "#fff" : "#a6c7e5" };
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
                return { color: isActive ? "#fff" : "#a6c7e5" };
              }}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => {
                return { color: isActive ? "#fff" : "#a6c7e5" };
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

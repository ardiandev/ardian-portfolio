import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Squash as Hamburger } from 'hamburger-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navEl, setNavEl] = useState("hidden");
  const [elementUl, setElementUl] = useState([]);

  useEffect(() => {
    if (isOpen) {
      setNavEl("bg-[#0c2540] flex items-center h-screen absolute inset-0 transition ease-in-out delay-150 md:block");
      setElementUl("mx-auto flex flex-col md:flex-row justify-center items-center gap-12 transition ease-in-out delay-150");
    } else {
      setNavEl("hidden transition-all");
    }
  }, [isOpen]);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false); // Reset isOpen to false on page refresh
  }, []);

  return (
    <header className="container mx-auto flex py-6 px-3 justify-between items-center sticky top-0 bg-[#0c2540] static">
      <h1 className="font-bold text-2xl round-full p-[4px] border-2">
        <Link to="/">AP</Link>
      </h1>
   
      {/* Dekstop menu */}
       <nav className="hidden md:flex">
        <ul className="hidden md:flex gap-2">
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

      {/* mobile menu */}
         <div className="md:hidden z-10">
        <Hamburger toggled={isOpen} toggle={handleMenu} />
      </div>
      <nav className={navEl}>
        <ul className={elementUl}>
          <li>
            <NavLink
              onClick={handleMenu}
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
              onClick={handleMenu}
              to="/about"
              style={({ isActive }) => {
                return { color: isActive ? "#fff" : "#a6c7e5" };
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleMenu}
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
              onClick={handleMenu}
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

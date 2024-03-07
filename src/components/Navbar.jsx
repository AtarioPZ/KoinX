import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between fixed top-0 w-full lg:pl-16 lg:pr-10 md:px-8 px-4 py-4 border-b shadow-md items-center bg-white z-50">
      <img src="https://i.ibb.co/TqwsqTB/logo.png" alt="KoinX" className="w-28 object-cover h-8" />
      <div className="flex-grow"></div>
      <div>
        <div ref={navRef} className={menuOpen ? "responsive_nav" : ""}>
        <ul className={menuOpen ? "md:flex md:gap-8 gap-4 items-center text-base" : "md:flex md:gap-8 gap-4 items-center text-base hidden"}>
          <li className="capitalize font-bold tracking-tight">
            <a href="#" onClick={toggleMenu}>crypto taxes</a>
          </li>
          <li className="capitalize font-bold tracking-tight">
            <a href="#" onClick={toggleMenu}>free tools</a>
          </li>
          <li className="capitalize font-bold tracking-tight">
            <a href="#" onClick={toggleMenu}>resource center</a>
          </li>
          <button className="px-6 py-2 bg-[#0052fe] rounded-lg text-white text-base font-bold ml-6" onClick={toggleMenu}>
            Get Started
          </button>
        </ul>

        </div>
      </div>      
      <button className="nav-btn" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;

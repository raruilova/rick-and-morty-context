import FavoriteCharacter from "./FavoriteCharacter";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-700 text-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} className="max-w-xs h-auto" alt="RM Logo" />
          </Link>

          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            R&M
          </span>
        </div>
        <div className="md:block">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <FavoriteCharacter />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

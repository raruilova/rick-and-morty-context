import FavoriteCharacter from "./FavoriteCharacter";
import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-slate-700 text-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a className="flex items-center">
          <img
            src={logo}
            className="max-w-xs h-auto"
            alt="RM Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            R&M
          </span>
        </a>
        <div className="md:block">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <FavoriteCharacter/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

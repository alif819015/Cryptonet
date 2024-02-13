import { Link } from "react-router-dom";

const NavBar = () => {
  const navList = (
    <>
      <ul className="flex items-center gap-6 font-semibold text-lg text-white">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Contruct</Link>
      </ul>
    </>
  );
  return (
    <div className="navbar w-full h-full max-w-[1230px] px-5 mx-auto pt-7">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navList}
          </ul>
        </div>
        <a className="font-bold text-3xl text-white">
          Event <span className="text-[#00D4FC]">360</span>
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
      </div>
    </div>
  );
};

export default NavBar;

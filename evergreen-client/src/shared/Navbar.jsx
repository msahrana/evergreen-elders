import {Link} from "react-router-dom";
import Logo from "/evergreen-elders.png";
import useAuth from "../hooks/useAuth";
import {IoIosArrowDown} from "react-icons/io";

const Navbar = () => {
  const {user, logOut} = useAuth();

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link>
          <img className="w-12 rounded-full" src={Logo} alt="" />
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 uppercase">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/pages">
                Pages
                <IoIosArrowDown />
              </Link>
            </li>
            {!user && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-44"
            >
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/add-blog"> Add Blogs</Link>
              </li>
              <li className="mt-2">
                <button
                  onClick={logOut}
                  className="bg-gray-200 block text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

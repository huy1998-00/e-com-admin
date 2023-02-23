import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/auth";
const Layout = () => {
  const { loggedin } = useContext(AuthContext);
  const role = localStorage.getItem("role");
  const navi = useNavigate();

  const isAdmin = role === "admin" ? true : false;

  const handleLogout = () => {
    localStorage.clear();
    navi("/login");
  };
  const handleLogin = () => {
    navi("/login");
  };

  return (
    <div className="flex w-max-full h-screen flex-wrap  bg-gradient-to-r from-stone-100 to-stone-500">
      <div className="basis-1/12 border-r-2 border-r-zinc-200 h-screen">
        <div className="flex flex-col mt-5  ">
          {isAdmin && loggedin && (
            <Link
              to="/product"
              className="text-yellow-900 text-lg my-3 hover:text-orange-300"
            >
              Products
            </Link>
          )}
          {loggedin && (
            <Link
              to="/chat"
              className="text-yellow-900 text-lg my-3 hover:text-orange-300"
            >
              Live Chat
            </Link>
          )}
          {isAdmin && loggedin && (
            <Link
              to="/dashboard"
              className="text-yellow-900 text-lg my-3  hover:text-orange-300"
            >
              Dashboard
            </Link>
          )}
          {isAdmin && loggedin && (
            <Link
              to="/addproduct"
              className="text-yellow-900 text-lg my-3  hover:text-orange-300"
            >
              Add Products
            </Link>
          )}

          <div>
            {!loggedin ? (
              <button
                className="mt-20 bg-black text-white font-bold py-2 px-4 rounded-lg  "
                onClick={handleLogout}
              >
                {" "}
                Login
              </button>
            ) : (
              <button
                className="mt-20 bg-black text-white font-bold py-2 px-4 rounded-lg  "
                onClick={handleLogout}
              >
                {" "}
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="basis-11/12 flex flex-warp">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../components/context/UserContextProvider";

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  const { user } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    window.location.reload();
  };

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
            {/* <img src={logo} alt='' /> */}
            <Link className="text-2xl font-bold cursor-pointer" to="/">
              NetKart
            </Link>
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search netkart.com" />
            <span>All Category</span>
          </div>

          {user ? (
            <div className="icon f_flex width">
              <i className="fa fa-user icon-circle cursor-pointer"></i>
              <div className="cart">
                <Link to="/cart">
                  <i className="fa fa-shopping-bag icon-circle"></i>
                  <span>{CartItem.lengths === 0 ? "" : CartItem.length}</span>
                </Link>
              </div>
              <div className="flex items-center justify-center mx-6 cursor-pointer">
                <p
                  onClick={handleLogout}
                  className="bg-gray-200 px-6 py-2 rounded-xl"
                >
                  Logout
                </p>
              </div>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="whitespace-nowrap bg-black text-white rounded-full px-6 py-2 text-xl capitalize hover:bg-opacity-80 "
              >
                <p>Sign In</p>
              </Link>

              <Link to="/signup" className="btn-light py-2 hidden md:block">
                <p>Sign Up</p>
              </Link>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Search;

import React, { useContext, useEffect, useState } from "react";
import logo from "/logo.png";
import { FaRegUser } from "react-icons/fa";
import Modal from "./Modal";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const { user, loading } = useAuth();
  const [cart, refetch] = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <a href="/" className= "text-white">
          Home
        </a>
      </li>
      <li tabIndex={0}>
        <details>
          <summary className="text-white">Menu</summary>
          <ul className="p-2">
            <li>
              <a href="/menu">All</a>
            </li>
            <li>
              <a >Bikes</a>
            </li>
            <li>
              <a>Scoters</a>
            </li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary className="text-white">Services</summary>
          <ul className="p-2">
            <li>
              <a >Offline Order</a>
            </li>
            <li>
              <a>Vehical Booking</a>
            </li>
            <li>
              <a>Vehical Tracking</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a className="text-white">Offers</a>
      </li>
    </>
  );

  return (
    <header
      className={`max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out`}
    >
      <div
        className={`navbar xl:px-24 ${
          isSticky
            ? "shadow-md bg-black-100 transition-all duration-300 ease-in-out"
            : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown justify-between">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black-100 rounded-box w-64 space-y-3"
            >
              {navItems}
            </ul>
          </div>
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle hidden lg:flex">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* shopping cart */}
          <Link to="/cart-page">
            <label
              tabIndex={0}
              className="btn bg-white btn-ghost btn-circle lg:flex items-center justify-center mr-3"
            >
              <div className="indicator">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item bg-red text-white">
                  {cart.length || 0}
                </span>
              </div>
            </label>
          </Link>

          {/* login button */}

          {user ? (
            <>
              <Profile user={user} />
            </>
          ) : (
            <button
              onClick={() => document.getElementById('my_modal_5').showModal()}
              className="btn flex items-center gap-2 rounded-full px-6 bg-orange text-white"
            >
              <FaRegUser /> Login
            </button>
          )}
          <Modal />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

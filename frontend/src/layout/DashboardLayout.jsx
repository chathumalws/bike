import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { MdDashboard, MdDashboardCustomize } from "react-icons/md";
import {
  FaEdit,
  FaLocationArrow,
  FaPlusCircle,
  FaQuestionCircle,
  FaRegUser,
  FaShoppingBag,
  FaUser,
} from "react-icons/fa";

import { FaCartShopping } from "react-icons/fa6";
import Login from "../components/Login";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const sharedLinks = (
  <>
    <li className="mt-3">
      <Link to="/">
        <MdDashboard /> Home
      </Link>
    </li>
    <li>
        <Link to="/menu"><FaCartShopping/> Menu</Link>
    </li>
    <li>
        <Link to="/menu"><FaLocationArrow/> Orders Tracking</Link>
    </li>
    <li>
        <Link to="/menu"><FaQuestionCircle/> Customer Support</Link>
    </li>
  </>
);

const DashboardLayout = () => {
const {loading, logOut} = useAuth()
const [isAdmin, isAdminLoading] = useAdmin()
const navigate = useNavigate()

  // logout
  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };



  return (
    <div>
          {
      isAdmin ? 
        <div className="drawer sm:drawer-open">
              <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content flex flex-col sm:items-start sm:justify-start my-2">
                {/* Page content here */}
                <div className="flex items-center justify-between mx-4">
                  <label
                    htmlFor="my-drawer-2"
                    className="btn bg-pink text-white drawer-button lg:hidden"
                  >
                    <MdDashboardCustomize />
                  </label>
                  <button className="btn rounded-full px-6 bg-pink flex items-center gap-2 text-white sm:hidden" onClick={handleLogout}>
                    <FaRegUser /> Logout
                  </button>
        </div>
        
        <div className="mt-5 md:mt-2 mx-4">
          <Outlet />
        </div>

        </div> 

        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay "></label> 
          <ul className="menu p-4 w-80 min-h-full bg-black text-white">
            {/* Sidebar content here */}
            <li>
            <Link to="/dashboard" className="flex justify-start mb-3">
              <img src="/logo.png" alt="" className="w-20" />
              <span className="badge bg-orange text-white">admin</span>
            </Link>
          </li>
            <hr />
          <li className="mt-3 ">
            <Link to="/dashboard">
              <MdDashboard /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <FaShoppingBag /> Manage Bookings
            </Link>
          </li>
          <li>
            <Link to="/dashboard/add-menu">
              <FaPlusCircle />
              Add Menu
            </Link>
          </li>
          <li>
            <Link to="/dashboard/manage-items">
              <FaEdit /> Manage Items
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/dashboard/users">
              <FaUser /> All Users
            </Link>
          </li>

          <hr />

          {/* shared nav links */}
          {
              sharedLinks
          }
          </ul>
          </div>
    </div> 
    : (loading ? <Login/> : <div className="h-screen flex justify-center items-center"><Link to="/"><button className="btn bg-pink text-white">Back to Home</button></Link></div>)
  }
    </div>
  );
};

export default DashboardLayout;
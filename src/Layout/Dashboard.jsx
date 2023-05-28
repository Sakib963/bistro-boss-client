import { NavLink, Outlet } from "react-router-dom";

import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
} from "react-icons/fa";
import {FiMenu} from 'react-icons/fi'
import {AiFillShopping} from 'react-icons/ai'
import {IoMdMail} from 'react-icons/io'
import { Helmet } from "react-helmet-async";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
  return (
    <div className="drawer drawer-mobile">
        <Helmet>
                <title>Dashboard | Bistro Boss</title>
            </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-[#D1A054]">
        <li>
            <NavLink to='/dashboard/home'>
              <FaHome className="text-2xl" />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/reservation'>
              <FaCalendarAlt className="text-2xl" />
              Reservations
            </NavLink>
          </li>
          
          <li>
            <NavLink to='/dashboard/mycart'>
              <FaShoppingCart className="text-2xl" />
              My Cart <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/paymenthistory'>
              <FaWallet className="text-2xl" />
              Payment History
            </NavLink>
          </li>
          <div className="divider"></div> 
          <li><NavLink to='/'><FaHome className="text-2xl" />Home</NavLink></li>
          <li><NavLink to='/menu'><FiMenu className="text-2xl"/>Menu</NavLink></li>
          <li><NavLink to='/order/salad'><AiFillShopping className="text-2xl"/>Shop</NavLink></li>
          <li><NavLink to="/contact"><IoMdMail className="text-2xl"/>Contact</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

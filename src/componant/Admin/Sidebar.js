import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="col-lg-2 bg-primary sbar">
        <ul className="nav nav-pills flex-column ulmenu">
          <li className="nav-item smenu ">
            <Link to="/admin" className="nav-link text-white ">
              Dashboard
            </Link>
          </li>
          <li className="nav-item smenu">
            <Link to="users" className="nav-link text-white">
              Users
            </Link>
          </li>
          <li className="nav-item smenu">
            <Link to="products" className="nav-link text-white">
              Products
            </Link>
          </li>

          <li className="nav-item smenu">
            <Link to="Orders" className="nav-link text-white">
              Order
            </Link>
          </li>
          <li className="nav-item smenu">
            <Link to="colors" className="nav-link text-white">
              Colors
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

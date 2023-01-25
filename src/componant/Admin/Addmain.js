import Addfooter from "./Addfooter";
import Addheader from "./Addheader";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Addmain() {
  return (
    <div>
      <Addheader />
      <div className="row">
        <Sidebar />
        <Outlet />
      </div>
      <Addfooter />
    </div>
  );
}

export default Addmain;

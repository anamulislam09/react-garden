import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Addheader() {
  let navigate = useNavigate();
  const email = sessionStorage.getItem("email");

  const logOut = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <nav className=" row navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="col-sm-12 ">
          <h3 className="logo">AnamGarden</h3>

          <a
            onClick={logOut}
            className="nav-link active text-white logg"
            href=""
          >
            Logout
            <span class="glyphicon glyphicon-off"></span>
          </a>
        </div>
      </nav>
    </div>
  );
}

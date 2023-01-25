import React from "react";
import { Link } from "react-router-dom";

export default function Services6() {
  return (
    <>
      <div className="container">
        <div className="mt-5">
          <h1 className="text-center">Single Product</h1>
          <hr />
        </div>
        <div className="row mt-5">
          <div className="single col-lg-4">
            <div className="service-img rounded simg">
              <img
                className="img-fluid"
                src="assets/img/service-6.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-6">
            <h2 className="mb-3">Urban Gardening</h2>
            <p className="mb-4">
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet. Erat ipsum justo amet duo et elitr
              dolor, est duo duo eos lorem sed diam stet diam sed stet. Erat
              ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
              diam stet diam sed stet. Erat ipsum justo amet duo et elitr dolor,
              est duo duo eos lorem sed diam stet diam sed stet. Erat ipsum
              justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
              diam sed stet.
            </p>

            <Link to="/userlogin" className="btn btn-primary  order">
              Orders
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

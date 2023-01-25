import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div
        class="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-lg-3 col-md-6">
              <h4 class="text-white mb-4">Our Office</h4>
              <p class="mb-2">
                <i class="fa fa-map-marker-alt me-3"></i>123 Street, Kakrail
                ,Dhaka
              </p>
              <p class="mb-2">
                <i class="fa fa-phone-alt me-3"></i>+01847309892
              </p>
              <p class="mb-2">
                <i class="fa fa-envelope me-3"></i>mdanamulislam09@gmail.com
              </p>
              <div class="d-flex pt-2">
                <a
                  class="btn btn-square btn-outline-light rounded-circle me-2"
                  href=""
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  class="btn btn-square btn-outline-light rounded-circle me-2"
                  href="https://www.facebook.com/mdanamul09"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  class="btn btn-square btn-outline-light rounded-circle me-2"
                  href=""
                >
                  <i class="fab fa-youtube"></i>
                </a>
                <a
                  class="btn btn-square btn-outline-light rounded-circle me-2"
                  href="https://www.linkedin.com/in/anamulislam09/"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4 class="text-white mb-4">Services</h4>

              <Link to="/serviceDetails1" className="btn btn-link">
                Landscaping
              </Link>

              <Link to="/serviceDetails2" className="btn btn-link">
                Pruning plants
              </Link>

              <Link to="/serviceDetails3" className="btn btn-link">
                Urban Gardening
              </Link>

              <Link to="/serviceDetails4" className="btn btn-link">
                Garden Maintenance
              </Link>

              <Link to="/serviceDetails5" className="btn btn-link">
                Green Technology
              </Link>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4 class="text-white mb-4">Quick Links</h4>

              <Link to="/about" className="btn btn-link ">
                About
              </Link>

              <Link to="/contact" className="btn btn-link ">
                Contact Us
              </Link>

              <Link to="/services" className="btn btn-link ">
                Our services
              </Link>

              <Link to="/features" className="btn btn-link ">
                Features
              </Link>

              <Link to="/projects" className="btn btn-link ">
                Projects
              </Link>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4 class="text-white mb-4">Newsletter</h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div class="position-relative w-100">
                <Link
                  to="/userregistration"
                  className="btn btn-primary py-2 position-absolute top-0 mt-2 me-2"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid copyright py-4">
        <div class="container">
          <div class="row">
            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a class="border-bottom" href="#">
                Your Site Name
              </a>
              , All Right Reserved.
            </div>
            <div class="col-md-6 text-center text-md-end">
              Designed By{" "}
              <a class="border-bottom" href="https://htmlcodex.com">
                HTML Codex
              </a>{" "}
              Distributed By <a href="https://themewagon.com">ThemeWagon</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

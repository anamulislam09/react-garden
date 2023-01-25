import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function AdminRegistration() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  function changValue(e) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }

  function formSubmit(e) {
    e.preventDefault();
    axios
      .post(
        "http://localhost/anamul/React_projects/react-garden/Api/UserRegistration.php",
        { info }
      )
      .then((res) => {
        if (res.data.success) {
          navigate("/adminLogin");
        }
        alert(res.data.msg);
      });
  }

  return (
    <div class="container mt-3 form">
      {/* <Modal isOpen={info.modal}> */}
      <h2 className="text-center">Registration Form</h2>
      <form onSubmit={formSubmit} className="col-lg-8 m-auto">
        <div class="mb-3 mt-3">
          <label for="name">Name:</label>
          <input
            type="text"
            class="form-control"
            id="name"
            onChange={changValue}
            placeholder="Enter name"
            name="name"
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="email">Email:</label>
          <input
            type="email"
            class="form-control"
            id="email"
            onChange={changValue}
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="name">Phone:</label>
          <input
            type="text"
            class="form-control"
            id="phone"
            onChange={changValue}
            placeholder="Enter phone number"
            name="phone"
          />
        </div>

        <div class="mb-3">
          <label for="pwd">Password:</label>
          <input
            type="password"
            class="form-control"
            id="pwd"
            placeholder="Enter password"
            onChange={changValue}
            name="password"
          />
        </div>
        <div class="form-check mb-3">
          <Link to="/AdminLogin" className="log">
            Already have an account.<a href="">Login</a>
          </Link>
        </div>
        <Button
          type="submit"
          class="btn btn-primary "
          style={{ width: "100%" }}
        >
          Submit
        </Button>
      </form>
      {/* </Modal> */}
    </div>
  );
}

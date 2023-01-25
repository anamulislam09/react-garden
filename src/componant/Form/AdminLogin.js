import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function AdminLogin() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);

    axios
      .post(
        "http://localhost/anamul/React_projects/react-garden/Api/AdminLogin.php",
        user
      )
      .then((res) => {
        // alert(res.data.msg);
        // console.log(res.data);

        if (res.data.success) {
          sessionStorage.setItem("email", res.data.user.email);
          // localStorage.setItem("password", res.data.password);
          navigate("/admin");
        } else {
          alert(res.data.error);
        }
      });
  }

  return (
    <div class="container mt-3 form">
      <h2 className="text-center">Login Form</h2>
      <form onSubmit={handleSubmit} className="col-lg-8 m-auto">
        <div class="mb-3 mt-3">
          <label for="email">Email:</label>
          <input
            type="email"
            class="form-control"
            id="email"
            onChange={handleChange}
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div class="mb-3">
          <label for="pwd">Password:</label>
          <input
            type="password"
            class="form-control"
            id="pwd"
            onChange={handleChange}
            placeholder="Enter password"
            name="password"
          />
        </div>
        <div class="form-check mb-3">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" name="remember" />{" "}
            Remember me
          </label>

          <Link to="/AdminRegistration" className="log ">
            Registration first
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
    </div>
  );
}

import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function OrderForm() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    name: "",
    Pname: "",
    Price: "",
  });

  function changValue(e) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }

  function formSubmit(e) {
    e.preventDefault();
    axios
      .post(
        "http://localhost/anamul/React_projects/react-garden/Api/OrderForm.php",
        { info }
      )
      .then((res) => {
        if (res.data.success) {
          navigate("/services");
        }
        alert(res.data.msg);
      });
  }

  return (
    <div class="container mt-3 form">
      {/* <Modal isOpen={info.modal}> */}
      <h2 className="text-center">Order Form</h2>
      <form onSubmit={formSubmit} className="col-lg-8 m-auto">
        <div class="mb-3 mt-3">
          <label for="name">Your name:</label>
          <input
            type="text"
            class="form-control"
            id="name"
            onChange={changValue}
            placeholder="Enter your name"
            name="name"
          />
        </div>

        <div class="mb-3 mt-3">
          <label for="pname">Product name:</label>
          <input
            type="text"
            class="form-control"
            id="Pname"
            onChange={changValue}
            placeholder="Enter Product name"
            name="Pname"
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="name">Price:</label>
          <input
            type="text"
            class="form-control"
            id="Price"
            onChange={changValue}
            placeholder="Enter product Price"
            name="Price"
          />
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

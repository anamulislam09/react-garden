import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const navigate = useNavigate();

  const [prodinfo, prodinfoset] = useState({
    name: "",
    details: "",
    price: "",
  });
  console.log(prodinfo);

  const onChangeValue = (e) => {
    prodinfoset({ ...prodinfo, [e.target.name]: e.target.value });
  };
  //   console.log(prodinfo);

  const SubmitValue = async (e) => {
    e.preventDefault();
    e.persist();
    axios
      .post(
        "http://localhost/anamul/React_projects/react-garden/Api/product/addproduct.php",
        {
          pname: prodinfo.name,
          pdetails: prodinfo.details,
          pprice: prodinfo.price,
        }
      )
      .then((result) => {
        alert(result.data.msg);
        navigate("/admin/Products");
      });
  };

  return (
    <>
      <div className="col-lg-8  py-5">
        <h1 className="text-center mt-2 bg-dark text-white">Add new product</h1>
        <hr />

        <form onSubmit={SubmitValue}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              placehlder="Enter your name"
              name="name"
              onChange={onChangeValue}
            />
          </div>
          <div className="form-group">
            <label>Details: </label>
            <input
              type="text"
              placehlder="Enter your name"
              name="details"
              onChange={onChangeValue}
            />
          </div>
          <div className="form-group">
            <label>Price: </label>
            <input
              type="text"
              placehlder="Enter your name"
              name="price"
              onChange={onChangeValue}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

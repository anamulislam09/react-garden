import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ServiceDetails1(props) {
  const [product, setProduct] = useState();

  const params = useParams();
  let user_id = 100;

  // let data = {
  //   prName: product.name,
  //   prCat: product.catagory,
  //   prPrice: product.price,
  //   prQty: product.details,
  //   prUser: product.user_id,
  // };

  const orderHandle = (id) => {
    axios
      .post(
        "http://localhost/anamul/React_projects/react-garden/Api/orders/order.php",
        {
          sid: params.id,
        }
      )
      .then((Response) => {
        alert(Response.data);
      });
  };

  return (
    <div>
      <div className="flex">
        {/* <div className="service" style={{ width: "30%" }}>
          <div className="product-item">
            <img src={product.image} width="100%" />
            <h2>{product.category} </h2>
            <p> {product.details}</p>
            <p> Rs. {product.price} /-</p>
          </div>
          
          <button className="btn btn-info" onClick={orderHandle}>
            Orders
          </button>
        </div> */}
      </div>
    </div>
  );
}

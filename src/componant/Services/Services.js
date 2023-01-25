import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceDetails1 from "./ServiceDetails1";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Services() {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    allprod();
  }, []);

  const sHandle = (id) => {
    // console.log(id);
    navigate(`/servicedetails1/${id}`);
    // return <ServiceDetails1 id={id} />;
  };

  const allprod = async () => {
    axios
      .get(
        "http://localhost/anamul/React_projects/react-garden/Api/orders/services.php"
      )
      .then((res) => {
        setProduct(res.data.items);
      });
  };

  return (
    <div>
      <div className="flex">
        {product.map((productItem, productIndex) => {
          return (
            <div className="service" style={{ width: "30%" }}>
              <div className="product-item">
                <img src={productItem.image} width="100%" />
                <h2>{productItem.category} </h2>
                <p> {productItem.details}</p>
                <p> Rs. {productItem.price} /-</p>
              </div>
              <Link to="/userlogin" className="btn btn-primary btn-sm">
                Orders
              </Link>

              {/* <button
                className="btn btn-info"
                onClick={() => {
                  sHandle(productItem.id);
                }}
              >
                Details
              </button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

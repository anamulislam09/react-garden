import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Orders() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    allprod();
  }, []);

  console.log(product);

  const allprod = async () => {
    axios
      .get(
        "http://localhost/anamul/React_projects/react-garden/Api/orders/order.php"
      )
      .then((res) => {
        setProduct(res.data.datas.pr);
        // console.log(res.data.datas.pr);
      });
  };

  const delconfirm = (id) => {
    delprod(id);
    // console.log(id)
  };

  const delprod = async (id) => {
    axios
      .post(
        "http://localhost/anamul/React_projects/react-garden/Api/orders/ConfirmOrder.php",
        { prodid: id }
      )
      .then((res) => {
        alert(res.data.msg);
        allprod();
      });
  };

  return (
    <>
      <div className="col-lg-8 py-5">
        <h1 className="text-center bg-dark text-white">All Order list</h1>
        <br />
        <br />

        <br />
        <br />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Details</th>

              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {product.map((item, index) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.productname}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() => delconfirm(item.id)}
                    className="btn btn-info btn-sm"
                  >
                    Confirm Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

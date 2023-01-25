import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [product, setProduct] = useState([]);

  //searchTerm start here
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    allprod();
  }, []);

  const searchProduct = product.filter(
    (pr) =>
      pr.name.toLowerCase().includes(searchTerm) ||
      pr.details.toLowerCase().includes(searchTerm) ||
      pr.price.includes(searchTerm)
  );

  console.log(product);

  const allprod = async () => {
    axios
      .get(
        "http://localhost/anamul/React_projects/react-garden/Api/product/Allproduct.php"
      )
      .then((res) => {
        setProduct(res.data.datas.pr);
      });
  };

  const delconfirm = (id) => {
    delprod(id);
    // console.log(id)
  };

  const delprod = async (id) => {
    axios
      .post(
        "http://localhost/anamul/React_projects/react-garden/Api/delproduct.php",
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
        <h1 className="text-center bg-dark text-white">All Product list</h1>
        <br />
        <br />

        <label htmlFor="search">
          <strong>Search Your Product: </strong>
        </label>
        <input
          id="search"
          name="searchTerm"
          onChange={handleSearch}
          type="text"
        />
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
            {searchProduct.map((item, index) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.details}</td>

                <td>{item.price}</td>
                <td>
                  {/* <button className='btn btn-success'>Edit</button> */}
                  <Link
                    to={`/admin/products/editproduct${item.id}`}
                    className="btn btn-success"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => delconfirm(item.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Detelet
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link to="/admin/addproduct" className="btn btn-info">
          Add new
        </Link>
      </div>
    </>
  );
}

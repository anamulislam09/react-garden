import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  console.log(product);

  const submitValue = (e) => {
    e.preventDefault();
    productsubmit();
  };
  // Update data send to Database
  const productsubmit = () =>
    axios
      .post(
        "http://localhost/anamul/React_projects/react-garden/Api/product/updateproduct.php",
        {
          prid: product.id,
          prname: product.name,
          prprice: product.price,
          prdet: product.details,
          // primage: product.image,
        }
      )
      .then((res) => {
        navigate("/admin/products");
        //console.log(res.data.product.prdata[0]);
      });

  useEffect(() => {
    productone(params.pid);
  }, []);
  console.log("MyID:" + params.pid);
  const changeValue = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  // Data Display for Editing
  const productone = (pid) =>
    axios
      .post(
        "http://localhost/anamul/React_projects/react-garden/Api/product/getproduct.php",
        { prid: pid }
      )
      .then((res) => {
        setProduct(res.data.product.prdata[0]);
        //console.log(res.data.product.prdata[0]);
      })
      .catch((error) => console.log(error));

  return (
    <>
      <div className="col-lg-8  py-5">
        <h1 className="text-center mx-2 bg-dark text-white">Edit Product </h1>
        <div className="container">
          <form onSubmit={submitValue}>
            <div className="form-group">
              <label>Product Name</label>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={changeValue}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Product Details</label>
              <textarea
                className="form-control"
                name="details"
                value={product.details}
                onChange={changeValue}
                type="text"
              ></textarea>
            </div>
            {/* 
            <div className="form-group">
              <label>Product image</label>
              <input
                type="file"
                className="form-control"
                onChange={changeValue}
                name="image"
                value={product.image}
              />
            </div> */}
            <div className="form-group">
              <label>Product Price</label>
              <input
                type="text"
                className="form-control"
                onChange={changeValue}
                name="price"
                value={product.price}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProduct;

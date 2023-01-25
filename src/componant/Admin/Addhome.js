import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Addhome() {
  let navigate = useNavigate();
  const auth = sessionStorage.getItem("email");

  useEffect(() => {
    if (auth == null) {
      navigate("/AdminLogin");
    }
  }, []);

  return (
    <div className="col-sm-10">
      <div className=" user">
        <p className="pra">Total user</p>
        <h2 className="text">15 </h2>
      </div>
      <div className="user">
        <p className="pra">Active user</p>
        <h2 className="text">5 </h2>
      </div>
      <div className="user">
        <p className="pra">Orders</p>
        <h2 className="text">4</h2>
      </div>
      <div className="user">
        <p className="pra">Total user</p>
        <h2 className="text">5 </h2>
      </div>
    </div>
  );
}

export default Addhome;

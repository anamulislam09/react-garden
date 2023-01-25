import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Edituser = (props) => {
  const navigate = useNavigate();
  const [userInfo, setuserInfo] = useState({
    name: props.list.name,
    email: props.list.email,
  });
  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  // Inserting a new user into the Database.
  const submitUser = async (event) => {
    try {
      event.preventDefault();
      event.persist();
      axios
        .post(
          "http://localhost/anamul/React_projects/react-garden/Api/users/editusers.php",
          {
            username: userInfo.name,
            useremail: userInfo.email,
            userids: props.list.id,
          }
        )
        .then((res) => {
          console.log(res.data);
          navigate("/admin/users");
          return;
        });
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <div className="col-lg-8 py-5">
        <h1 className="text-center mx-2 bg-dark text-white">Edit User</h1>
        <div className="container py-5">
          <form className="editForm" onSubmit={submitUser}>
            <h2> Edit Form </h2>
            <label htmlFor="_name">Name</label>
            <input
              type="text"
              id="_name"
              name="name"
              value={userInfo.name}
              onChange={onChangeValue}
              placeholder="Enter name"
              autoComplete="off"
              required
            />
            <br /> <br />
            <label htmlFor="_email">Email</label>
            <input
              type="email"
              id="_email"
              name="email"
              value={userInfo.email}
              onChange={onChangeValue}
              placeholder="Enter email"
              autoComplete="off"
              required
            />
            <br /> <br />
            <input type="submit" value="update" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Edituser;

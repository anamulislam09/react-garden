import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Users() {
  useEffect(() => {
    window.scrollTo(0, 0);
    alluser();
  }, []);
  const [isuser, setuser] = useState([]);
  const alluser = async (ids) => {
    try {
      axios
        .get(
          "http://localhost/anamul/React_projects/react-garden/Api/users/users.php"
        )
        .then((res) => {
          console.log(res.data.userlist.userdata);
          setuser(res.data.userlist.userdata);
        });
    } catch (error) {
      throw error;
    }
  };

  const deleteConfirm = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteUser(id);
    }
  };
  const deleteUser = async (id) => {
    try {
      axios
        .post(
          "http://localhost/anamul/React_projects/react-garden/Api/users/deleteusers.php",
          {
            userids: id,
          }
        )
        .then((res) => {
          setuser([]);
          alluser();
          return;
        });
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <div className="col-lg-8 py-5">
        <h1 className="text-center mx-2 bg-dark text-white">Users List</h1>
        <div className="container py-5">
          <Link to="/admin/insert" className="btn btn-primary">
            {" "}
            Create User{" "}
          </Link>
          <hr />
          <h1>Users List</h1>
          <table className=" table table-striped">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Acton</th>
            </tr>
            {isuser.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <span>
                    <Link to={`edit${item.id}`} className="btn btn-info">
                      {" "}
                      Edit{" "}
                    </Link>
                  </span>
                  <span
                    onClick={() => deleteConfirm(item.id)}
                    className="btn btn-danger"
                  >
                    {" "}
                    Delete{" "}
                  </span>{" "}
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

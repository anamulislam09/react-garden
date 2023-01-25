import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Edituser from "./Edituser";

const Edit = () => {
  let params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    edituserlist(params.ids);
  }, []);

  const [isuser, setuser] = useState([]);
  const [isloaduser, setloaduser] = useState(false);
  const edituserlist = async (ids) => {
    try {
      axios
        .post(
          "http://localhost/anamul/React_projects/react-garden/Api/users/getusers.php",
          {
            userids: ids,
          }
        )
        .then((res) => {
          console.log(res.data.userlist.userdata);
          setuser(res.data.userlist.userdata[0]);
          setloaduser(true);

          return;
        });
    } catch (error) {
      throw error;
    }
  };

  return <>{isloaduser && <Edituser list={isuser} />}</>;
};

export default Edit;

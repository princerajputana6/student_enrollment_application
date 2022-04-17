import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    sname: "",
    fname: "",
    email: "",
    dateofbirth: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    classoptted: "",
    dateenrolled: "",
    marks: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Dashboard
      </Link>
      <h1 className="display-4">Student Id: {id}</h1>
      <hr />
      <ul className="list-group w-100">
        <li className="list-group-item">Student's Name: <span className="float-right">{user.sname}</span> </li>
        <li className="list-group-item">Father's Name: <span className="float-right">{user.fname}</span></li>
        <li className="list-group-item">Email: <span className="float-right">{user.email}</span></li>
        <li className="list-group-item">Date Of Birth: <span className="float-right">{user.dateofbirth}</span></li>
        <li className="list-group-item">Address: <span className="float-right">{user.address}</span></li>
        <li className="list-group-item">City: <span className="float-right">{user.city}</span></li>
        <li className="list-group-item">State: <span className="float-right">{user.state}</span></li>
        <li className="list-group-item">Pin Code: <span className="float-right">{user.pincode}</span></li>
        <li className="list-group-item">Phone: <span className="float-right">{user.phone}</span></li>
        <li className="list-group-item">Class Optted: <span className="float-right">{user.classoptted}</span></li>
        <li className="list-group-item">Date Enrolled: <span className="float-right">{user.dateenrolled}</span></li>
        <li className="list-group-item">Marks Obtained: <span className="float-right">{user.marks}</span></li>
      </ul>
    </div>
  );
};

export default User;

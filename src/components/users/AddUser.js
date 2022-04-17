import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
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

  const { sname, fname, email, dateofbirth, address, city,state,pincode,phone,classoptted,dateenrolled,marks} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add new Student</h2>

        <form onSubmit={e => onSubmit(e)}>
          <div class="form-row" >
            <div class="form-group col-md-6">
              <label for="inputEmail4">Student's Name</label>
              <input type="text" class="form-control" name="sname" value={sname}
                onChange={e => onInputChange(e)} placeholder="Student's Name" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Father's Name</label>
              <input type="text" class="form-control" name="fname" value={fname}
                onChange={e => onInputChange(e)} placeholder="Father's Name" />
            </div>
          </div>
          <div class="form-row" >
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" name="email" value={email}
                onChange={e => onInputChange(e)} placeholder="Email" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Date of Birth</label>
              <input type="text" class="form-control" name="dateofbirth" value={dateofbirth}
                onChange={e => onInputChange(e)} placeholder="Date of Birth" />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" name="address" value={address}
              onChange={e => onInputChange(e)} placeholder="1234 Main St" />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" name="city" value={city}
                onChange={e => onInputChange(e)} />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control" name="state" value={state}
                onChange={e => onInputChange(e)}>
                <option selected>Select State</option>
                <option>Delhi</option>
                <option>Gurgaon</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Pin Code</label>
              <input type="text" class="form-control" name="pincode" maxlength="6" value={pincode}
                onChange={e => onInputChange(e)} />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputCity">Phone</label>
              <input type="number" class="form-control" maxlength="10" name="phone" value={phone}
                onChange={e => onInputChange(e)} />
            </div>
            <div class="form-group col-md-3">
              <label for="inputState">Class Optted</label>
              <select id="inputState" class="form-control" name="classoptted" value={classoptted}
                onChange={e => onInputChange(e)}>
                <option selected>Select Class</option>
                <option>5th Class</option>
                <option>6th class</option>
                <option>7th Class</option>
                <option>8th class</option>
                <option>9th Class</option>
                <option>10th Class</option>
              </select>
            </div>
            <div class="form-group col-md-3">
              <label for="inputZip">Date Enrolled</label>
              <input type="text" class="form-control" name="dateenrolled" value={new Date().toLocaleString()}
                />
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Marks</label>
              <input type="text" class="form-control" name="marks" value={marks}
                onChange={e => onInputChange(e)} />
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Add Student</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;

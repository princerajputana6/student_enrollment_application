import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container p-4">
      <div className="p-4">
        <h2 className="my-4">Enrolled Student's List</h2>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Student's Name</th>
              <th scope="col">Father's Name</th>
              <th scope="col">Email</th>
              <th scope="col">marks</th>
              <th scope="col">Class</th>
              <th scope="col">Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <>
              <tr>
                <th scope="row">{index + 1}</th>
                <td type="button" data-toggle="modal" data-target="#exampleModal">{user.sname}</td>
                <td>{user.fname}</td>
                <td>{user.email}</td>
                <td>{user.marks}</td>
                <td>{user.classoptted}</td>
                <td>{user.dateenrolled}</td>
                <td>
                  <Link class="mx-2 text-info" to={`/users/${user.id}`}>
                    <i class="fa-solid fa-eye"></i>
                  </Link>
                  <Link
                    class="mx-2 text-primary"
                    to={`/users/edit/${user.id}`}
                  >
                    <i class="fa-solid fa-pen"></i>
                  </Link>
                  <Link
                    class="mx-2 text-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </Link>
                </td>
              </tr>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Student's Detail</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
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
                    </div>
                  </div>
                </div>
              </>


            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Home;

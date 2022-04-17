import React from "react";
import { Link} from "react-router-dom";
const Navbar = () => {
  return (
 
      <div className="container flex align-items-center p-2 text-white justify-between bg-dark my-2">
      <Link className="h2 text-white" to="/">Enrollment App</Link>

        <Link className="btn btn-outline-light float-right" to="/users/add">Add Student</Link>
      </div>
  );
};

export default Navbar;

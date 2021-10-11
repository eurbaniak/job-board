import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Link to="/">Jobs.eu</Link>
      </h1>
      <ul>
        <li>
          <Link to="/jobs">Jobs</Link>
        </li>
        <li>
          <Link to="/companies">Companies</Link>
        </li>
        <li>
          <Link to="/post-a-job">Post a Job</Link>
        </li>
      </ul>
      <a href="https://github.com/eurbaniak" target="_blank" rel="noreferrer">
        <h3>github</h3>
      </a>
    </div>
  );
};

export default Header;

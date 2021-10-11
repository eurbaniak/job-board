import React from "react";
import "./search_banner.scss";
import { useLocation } from "react-router";

const SearchBanner = () => {
  const location = useLocation();
  return (
    <div className="search_banner_main">
      <div className="banner">
        <h1>Search Live Jobs</h1>
        <p>finding your new job just got easier</p>
      </div>
      <div
        className={
          location.pathname === "/jobs" ? "search_input" : "search_input_hidden"
        }
      >
        <input type="text" placeholder="search for job" />
        <span></span>
        <select>
          <option value="">Set Location</option>
          <option>Berlin</option>
        </select>
        <button className="search_button" type="submit">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBanner;

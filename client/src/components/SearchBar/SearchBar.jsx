import React from "react";
import "./SearchBar.css";
import Search from "../../assets/icons/Search.svg";

export default function SearchBar({ title }) {
  return (
    <div className="search-bar-container">
      <h2 className="search-title">{title}</h2>
      <div className="search-bar">
        <input type="text" placeholder="Rechercher..." className="search-input" />
        <div className="notification-icon">
          <img alt="Search" src={Search} />
        </div>
      </div>
    </div>
  );
}

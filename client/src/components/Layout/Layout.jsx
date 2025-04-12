import React from "react";
import Sidebar from "../../pages/Sidebar/Sidebar";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="Layout">
            <Sidebar />
      <div className="MainContent">{children}</div>
    </div>
  );
}

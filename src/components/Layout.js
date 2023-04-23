import React from "react";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="container">
      <header className="header">
        <h1>Pokedex</h1>
      </header>
      <main className="body">{children}</main>
      <footer className="footer">
        <p>Pokedex React JS App assignment for WEB2 2023.</p>
      </footer>
    </div>
  );
}

export default Layout;

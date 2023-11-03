//Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Footer() {
  return (
    <>
        <footer className="text-center text-white bg-dark">
          <div className="container p-4"></div>
          <div className="text-center p-3 bg-dark">
            © 2023 Copyright:
            <Link className="text-white" to="#">
              Group C5
            </Link>
          </div>
        </footer>
      
    </>
  );
}

export default Footer;

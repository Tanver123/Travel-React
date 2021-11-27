import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function Notfound() {
  return (
    <div className="text-center mx-auto">
      <div className="notfound text-center mx-auto">
        <img src="https://i.ibb.co/8jNTMLq/404.png" alt="" />
      </div>
      <Link to="/">
        <button className="btn back__button mb-3">back to home</button>
      </Link>
    </div>
  );
}

export default Notfound;

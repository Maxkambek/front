/** @format */

import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-4 nav_box_1">
            <div className="nav_logo">
              <img src="img/logo.svg" alt="" />
            </div>
            <div className="navbar_btn">Online</div>
          </div>
          <div className="col-4 nav_box_2">
            <div className="nav_item">Biz haqimizda</div>
            <div className="nav_item">Bog’lanish</div>
            <div className="nav_item">Kirish</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

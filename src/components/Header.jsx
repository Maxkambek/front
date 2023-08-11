/** @format */

import React from "react";

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-5">
            <div className="header_h">
              {" "}
              <span>T</span>a`lim bu ishonchli <br /> sarmoya
            </div>
            <div className="header_p">
              Dasturlash sohasida talab darajasi yuqori bo’lgan yo’nalishlarni
              biz bilan o’rganing.{" "}
            </div>
            <div className="header_btn">Ariza qoldirish</div>
          </div>
          <div className="col-5 d-flex justify-content-end">
            <img className="header_img_1" src="/img/header1.svg" alt="" />
            <img className="header_img_2" src="/img/header2.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

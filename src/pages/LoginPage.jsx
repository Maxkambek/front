/** @format */

import React from "react";

const LoginPage = () => {
  return (
    <div className="Login">
      <div className="container">
        <div className="row">
          <div className="col-12 register_logo">
            <img className="logo" src="/img/logo.svg" alt="" />
          </div>
        </div>
        <div className="register_box row justify-content-evenly align-items-center">
          <div className="col-lg-4 ">
            <img src="/img/loginpage.svg" className="w-100" alt="" />
          </div>
          <div className="col-lg-5">
            <form className="register_form" action="">
              <div className="register_h">Tizimga kirish</div>
              <div className="register_p">
                Telefon raqmingizni kiriting va tasdiqlash kodini oling
              </div>
              <div className="login_input">
                <input type="text" placeholder="Telefon" />
              </div>
              <div className="login_input d-none">
                <input type="text" placeholder="Tasdiqlash kodin kiriting" />
              </div>
              <div className="register_btn">
                <div>Tasdiqlash</div>
                <img src="/img/strelka.png" alt="" />
              </div>
              <div className="to_register">Ro’yxatdan o’tish</div>
              <div className="login_checkbox">
                <input type="checkbox" />
                <div className="checkbox_p">
                  Shaxsiy ma’luotlarni qayta ishlash va Platformadan foydalanish
                  shartlariga roziman
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

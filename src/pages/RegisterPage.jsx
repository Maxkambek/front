import React from "react";

const RegisterPage = () => {
  return (
    <div className="Register">
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
              <div className="register_h">Ro’yxatdan o’tish</div>
              <div className="register_p">
                Telefon raqmingizni kiriting va tasdiqlash kodini oling
              </div>
              <div className="register_input">
                <input type="text" placeholder="Ismingiz" />
              </div>
              <div className="register_input">
                <input type="text" placeholder="Telefon" />
              </div>
              <div className="register_input d-none">
                <input type="text" placeholder="Tasdiqlash kodin kiriting" />
              </div>
              <div className="register_btn">
                <div>Tasdiqlash</div>
                <img src="/img/strelka.png" alt="" />
              </div>
              <div className="register_checkbox">   
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

export default RegisterPage;

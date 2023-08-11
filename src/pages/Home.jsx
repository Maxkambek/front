/** @format */

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Courses from "../components/Courses";
import Numbers from "../components/Numbers";
import Careera from "../components/Careera";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Courses />
      <Numbers />
      <Careera />
      <Footer />
    </>
  );
};

export default Home;

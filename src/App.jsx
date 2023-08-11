/** @format */

import { HashRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Page404 from "./pages/Page404";
import Page500 from "./pages/Page500";
import ComingSoon from "./pages/ComingSoon";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/error" element={<Page404 />} />
          <Route path="/server-error" element={<Page500 />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
        <ScrollToTop />
      </HashRouter>
    </>
  );
}

export default App;

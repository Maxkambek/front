import React from "react"
import { HashRouter,Route,Routes } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"

function App() {

  return (
    <>
    <HashRouter>
      <Routes>
        <Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </HashRouter>
    </>
  )
}

export default App

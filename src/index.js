import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AuthForm from "./AuthForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="/signin">SignIn</Link>

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signin" element={<AuthForm />} />
    </Routes>
  </BrowserRouter>
);

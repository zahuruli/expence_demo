import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./layout.css";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <>
      <Toaster />
      <Header />
      <div className="content">{children}</div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;

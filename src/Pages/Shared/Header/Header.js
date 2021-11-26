import React from "react";

import "./Header.css";
import UpHeader from "./UpHeader/UpHeader";
import Banner from "../../Home/Banner/Banner";
import Menubar from "./Menubar/Menubar";
const Header = () => {
  return (
    <div>
      <UpHeader></UpHeader>

      <header>
        <Menubar></Menubar>
        <div className="overlay">
          <Banner />
        </div>
      </header>
    </div>
  );
};

export default Header;

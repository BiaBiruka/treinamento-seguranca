import React from "react";
import Banner from "../../assets/banner.png";
import "./styles.scss";

const Introduction = () => {
  window.localStorage.setItem("completedPages", 1);

  return (
    <div>
      <img src={Banner} alt="Banner" className="banner-img" />
      <div className="intro-container"></div>
    </div>
  );
};

export default Introduction;

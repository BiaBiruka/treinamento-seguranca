import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import navigate from "../../Functions/navigation";

const NextPage = () => {
  const navigateTo = useNavigate();

  const handleNavigate = () => {
    navigateTo(navigate(window.location.pathname, "next"));
  };

  return (
    <button className="goButton" onClick={() => handleNavigate()}>
      Avançar
    </button>
  );
};

export default NextPage;

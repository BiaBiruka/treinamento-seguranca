import React, { useEffect } from "react";
import "./styles.scss";
import navigate from "../../Functions/navigation";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigateFunction = useNavigate();

  // Checks if training has already been made
  // useEffect(() => {
  //   const path = navigate("/", "page-load");
  //   navigateFunction(path);
  // }, []);

  const handleNavigate = () => {
    const path = navigate("/", "next");
    navigateFunction(path);
  };

  return (
    <div className="main-page">
      <div className="title-container">
        <div className="title-content">
          <h1>Mensagens ocultas</h1>
          <h3>Treinamento de Segurança 2ºsem/2024</h3>
          <button onClick={() => handleNavigate()}>Iniciar</button>
        </div>
      </div>
    </div>
  );
};

export default Main;

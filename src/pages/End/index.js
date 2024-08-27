import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

const End = () => {
  const navigateTo = useNavigate();

  const handleNavigate = () => {
    navigateTo("/");
  };

  return (
    <div className="end-container">
      <div className="end-content">
        <h1> Parabéns, voce concluiu o treinamento! </h1>
        <span>
          Caso queira, você pode recomeçar o treinamento e baixar o documento do
          conteúdo.
        </span>
        <span>Você já pode sair desta tela.</span>
        <button onClick={() => handleNavigate()}>Voltar para o início</button>
      </div>{" "}
    </div>
  );
};

export default End;

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
        <h1> Parabéns, você concluiu o treinamento! </h1>
        <span>
          Você pode recomeçar o treinamento e baixar o documento do conteúdo.
        </span>
        <span>Você já pode sair desta tela.</span>
        <button onClick={() => handleNavigate()}>Voltar para o início</button>
        <span>
          Feito por: Beatriz Salvador Parolin, Ji dos Santos, Lucas Nascimento
          Silva e Felipe da Cunha Bueno.
        </span>
      </div>
    </div>
  );
};

export default End;

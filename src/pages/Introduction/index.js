import React from "react";
import Banner from "../../assets/banner.png";
import "./styles.scss";

const Introduction = () => {
  return (
    <>
      <div className="introduction-banner">
        <img src={Banner} alt="Banner" className="banner-img" />
        <div className="intro-container">
          <span className="bold-title">Esteganografia</span> é a arte de ocultar
          mensagens e/ou programas maliciosos em arquivos de imagem, vídeo,
          texto e áudios aparentemente normais à primeira vista.
        </div>
      </div>
      <div className="intro-content">
        <h1> Você consegue diferenciar essas duas imagens? </h1>
        <span> Clique no cartão para ver a resposta.</span>
        <div className="card-front"></div>
        <div className="card-back">
          <b> Não há diferença! </b> <br />
          Visualmente falando, as duas imagens são idênticas, porém ao analisar
          seu código-fonte é possível ver um texto oculto.
        </div>
      </div>
    </>
  );
};

export default Introduction;

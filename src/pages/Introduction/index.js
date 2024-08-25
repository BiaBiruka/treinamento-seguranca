import React from "react";
import Banner from "../../assets/banner.png";
import ImgNormal from "../../assets/image.png";
import Img2 from "../../assets/imagemComTexto.webp";
import "./styles.scss";
import Card from "../../Components/Card";

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
        <Card>
          <div className="images-row">
            <div className="esteg-img">
              <img src={ImgNormal} alt="Imagem normal" />
              Imagem 1
            </div>
            <div className="esteg-img">
              <img src={Img2} alt="Imagem com texto" className="esteg-img" />
              Imagem 2
            </div>
          </div>

          <div>
            <b> Não há diferença! </b> <br />
            Visualmente falando as duas imagens são idênticas, porém ao
            visualizar a segunda imagem como texto existe uma mensagem
            escondida.
          </div>
        </Card>
      </div>
    </>
  );
};

export default Introduction;

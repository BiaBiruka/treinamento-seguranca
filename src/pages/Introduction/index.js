import React from "react";
import Card from "../../Components/Card";
import Banner from "../../assets/banner.png";
import ImgNormal from "../../assets/imageNormal.png";
import Img2 from "../../assets/imagemComTexto.webp";
import PC from "../../assets/personWithPC.png";
import "./styles.scss";
import NextPage from "../../Components/NextPage";

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
        <i>Clique no cartão para virar</i>
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
        <div className="section-2">
          <img src={PC} alt="Pessoa utilizando computador" />
          <div>
            <h2>Os perigos da Esteganografia</h2>
            Apesar de parecer algo inofensivo, tudo aquilo que é oculto pode
            representar um risco. Por exemplo...
            <ul>
              <li>
                <b>Distribuição de malware: </b> A esteganografia pode ser
                utilizada para ocultar códigos maliciosos em arquivos que,
                quando abertos, são executados.
              </li>
              <li>
                <b>Vazamento de dados: </b> Ao esconder dados confidenciais em
                arquivos de mídia é possível distribuí-los sem levantar
                suspeitas.
              </li>
              <li>
                <b>Comunicação clandestina: </b> Grupos criminosos podem fazer
                uso da esteganografia para conseguirem se comunicar sem serem
                detectados.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <NextPage />
    </>
  );
};

export default Introduction;

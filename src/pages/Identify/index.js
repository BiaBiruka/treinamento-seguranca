import React from "react";
import NextPage from "../../Components/NextPage";
import Folders from "../../assets/folders.jpg";
import Carlos from "../../assets/carlos.jpg";
import Card from "../../Components/Card";
import "./styles.scss";

const Identify = () => {
  return (
    <div>
      <div className="identify-first-section">
        <div className="section-content">
          <h1>Atenção é proteção</h1>
          Apesar de não ser uma tarefa fácil, muitas vezes é possível perceber
          alterações em um arquivo observando suas características. Se você se
          deparar com uma mídia ou documento que ache suspeitos, tente
          perceber...
          <ul>
            <li>Se o arquivo é anormalmente pesado;</li>
            <li>Se a frequência do áudio possui alterações;</li>
            <li>Se a mídia possui cores estranhas em alguns pontos;</li>
          </ul>
          <span>
            Caso possua uma versão original do arquivo que recebeu, tente{" "}
            <b>comparar</b> ambos para ver se algo não parece certo.
          </span>
        </div>
        <img src={Folders} alt="Fileira de arquivos" />
      </div>
      <div className="identify-second-section">
        <div className="first-line">
          <img src={Carlos} alt="Carlos" />
          <div className="section-content">
            <h1>O que você faria?</h1>
            <span>
              Carlos trabalha no time de Segurança da Informação, sendo o
              principal responsável pela análise das comunicações e arquivos da
              empresa para garantir que não haja vazamento de informações.
              Recentemente Carlos percebeu que alguns arquivos de imagem estão
              parecendo suspeitos, e resolveu investigar mais a fundo. Quais dos
              arquivos abaixo parecem mais suspeitos?{" "}
              <i>Clique nos cartões para ver a resposta.</i>
            </span>
          </div>
        </div>
        <div className="cards-div">
          <Card>
            <div className="card-list">
              <ul>
                <li>
                  <b>Extensão: </b> PNG
                </li>
                <li>
                  <b>Resolução: </b> 1280x720
                </li>
                <li>
                  <b>Tamanho: </b> 1.2MB
                </li>
                <li>
                  <b>Caracteristicas: </b> Arquivo pesado
                </li>
              </ul>
            </div>
            <div className="card-list suspicious">
              <span>
                Este arquivo <b>é suspeito!</b> O tamanho da mídia é
                relativamente alto levando em consideração a resolução da
                imagem, o que é um possível indício de que há dados ocultos.{" "}
              </span>
            </div>
          </Card>

          <Card>
            <div className="card-list">
              <ul>
                <li>
                  <b>Extensão: </b> JPEG
                </li>
                <li>
                  <b>Resolução: </b> 1920x1080
                </li>
                <li>
                  <b>Tamanho: </b> 2MB
                </li>
                <li>
                  <b>Caracteristicas: </b> Cores anormais
                </li>
              </ul>
            </div>
            <div className="card-list suspicious">
              <span>
                Este arquivo <b>é suspeito!</b> A anomalia nas cores é um forte
                indício de esteganografia já que, principalmente em JPEGs, os
                pixels com as mensagens ocultas podem acabar sofrendo leves
                alterações.{" "}
              </span>
            </div>
          </Card>

          <Card>
            <div className="card-list">
              <ul>
                <li>
                  <b>Extensão: </b> GIF
                </li>
                <li>
                  <b>Resolução: </b> 640x480
                </li>
                <li>
                  <b>Tamanho: </b> 500KB
                </li>
                <li>
                  <b>Caracteristicas: </b> Sem anomalias
                </li>
              </ul>
            </div>
            <div className="card-list not-suspicious">
              <span>
                Este arquivo <b>não é suspeito!</b> As cores parecem normais e o
                tamanho está compatível com o esperado de um GIF dessa
                resolução. No entanto, é sempre bom garantir utilizando uma
                ferramenta de análise de arquivos.{" "}
              </span>
            </div>
          </Card>
        </div>
      </div>
      <NextPage />
    </div>
  );
};

export default Identify;

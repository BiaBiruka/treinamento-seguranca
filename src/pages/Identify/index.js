import React from "react";
import NextPage from "../../Components/NextPage";
import Folders from "../../assets/folders.jpg";
import Carlos from "../../assets/carlos.jpg";
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
        <div className="section-content">
          <img src={Carlos} alt="Carlos" />
          <h1>O que você faria?</h1>
          <span>
            Carlos trabalha no time de Segurança da Informação, sendo o
            principal responsável pela análise das comunicações e arquivos da
            empresa para garantir que não haja vazamento de informações.
            Recentemente Carlos percebeu que alguns arquivos de imagem estão
            parecendo suspeitos, e resolveu investigar mais a fundo. Quais dos
            arquivos abaixo parecem mais suspeitos?
            <i>Clique nos cartões para ver a resposta.</i>
          </span>
        </div>
      </div>
      <NextPage />
    </div>
  );
};

export default Identify;

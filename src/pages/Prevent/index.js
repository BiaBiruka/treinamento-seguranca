import React from "react";
import Protect from "../../assets/protect.png";
import NextPage from "../../Components/NextPage";
import "./styles.scss";
import Joana from "../../assets/joana.jpg";
import Card from "../../Components/Card";

const Prevent = () => {
  return (
    <>
      <div className="prevent-first-section">
        <img src={Protect} alt="Tecnologia protegida" />
        <div>
          <h1> Segurança em primeiro lugar! </h1>
          <p>
            Agora que você sabe como identificar possíveis ameaças, é necessário
            tomar uma atitude para evitar que estas ameaças se tornem um
            problema real.
          </p>
          <ul>
            <li>
              <b>Análise de arquivos: </b> Utilize ferramentas para analisar os
              arquivos recebidos em busca de possíveis ameaças. Você pode
              encontrar uma lista de ferramentas aprovadas pelo time se
              segurança{" "}
              <a href="" onClick={(e) => e.preventDefault()}>
                neste link
              </a>
              .
            </li>
            <li>
              <b>Monitoramento de Rede: </b> Para detectar padrões de
              comunicação suspeitos, utilize sempre os sistemas de monitoramento
              de rede disponíveis em sua máquina.
            </li>
            <li>
              <b>Treinamentos: </b> Mantenha sempre em dia os treinamentos de
              segurança fornecidos. Faça download do material para consultas
              posteriores e, em caso de dúvidas, entre em contato com seu
              supervisor ou o time de segurança.
            </li>
          </ul>
        </div>
      </div>
      <div className="prevent-second-section">
        <b>Lembre-se: </b>
        <span>
          NUNCA abra arquivos vindos de fontes desconhecidas ou remetentes
          suspeitos. Caso tenha dúvida se um arquivo é ou não seguro, entre em
          contato com o time de Segurança da Informação.
        </span>
      </div>
      <div className="prevent-third-section">
        <div className="section-content">
          <h1> O que você faria? </h1>
          <span>
            Joana faz parte do time de vendas e frequentemente recebe mensagens
            de clientes e parceiros de negócios de diversos países. Certo dia,
            Joana recebeu um e-mail em nome de uma empresa da qual nunca ouviu
            falar contendo apenas um arquivo de texto, e pesquisando mais sobre
            a empresa não encontrou nenhuma informação. O que Joana deve fazer?{" "}
            <i>Clique nos cartões para ver a resposta.</i>
          </span>
          <div className="cards-div">
            <div className="row-div">
              <Card>
                <div className="card-content">
                  <span>Abrir o arquivo e ver do que se trata.</span>
                </div>
                <div className="wrong">
                  <b>Errado!</b> Abrir arquivos de fontes desconhecidas pode ser
                  perigoso, já que a esteganografia permite executar scripts ao
                  abrir o documento.
                </div>
              </Card>

              <Card>
                <div className="card-content">
                  <span>
                    Entrar em contato com a equipe de Segurança da Informação.
                  </span>
                </div>
                <div className="right">
                  <b>Correto!</b> A equipe de Segurança saberá o que fazer nessa
                  situação e poderá analisar se o arquivo é ou não seguro.
                </div>
              </Card>
            </div>

            <div className="row-div">
              <Card>
                <div className="card-content">
                  <span>
                    Ignorar a mensagem e deixá-la na caixa de entrada.
                  </span>
                </div>
                <div className="wrong">
                  <b>Errado!</b> Mesmo que não seja aberta, a mensagem pode
                  representar uma possível ameaça. Ao se deparar com essa
                  situação, Joana deve entrar em contato com a equipe de
                  segurança.
                </div>
              </Card>

              <Card>
                <div className="card-content">
                  <span>Responder a mensagem pedindo mais informações.</span>
                </div>
                <div className="wrong">
                  <b>Errado!</b> Responder ao email pode não apenas dar deixa
                  para mais possíveis ataques de esteganografia, mas também pode
                  tornar Joana um alvo de ataques phishing.
                </div>
              </Card>
            </div>
          </div>
        </div>
        <img src={Joana} alt="Joana pensativa" />
      </div>
      <NextPage />
    </>
  );
};

export default Prevent;

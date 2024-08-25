import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Introduction from "./pages/Introduction";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/prevent" element={<Main />} />
          <Route path="/act" element={<Main />} />
          <Route path="/end" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/* 
intro - falar o que é e riscos, colocar a imagem de exemplo (vc consegue identificar? - revelar)
p2 - como se proteger (joguinho - quais medidas os gerentes devem adotar?)
p3 - formas de identificar + o que fazer (joguinho - selecione todas as opções do que fulana deveria fazer) 
finalização - pontos

*/

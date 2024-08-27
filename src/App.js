import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Introduction from "./pages/Introduction";
import Identify from "./pages/Identify";
import Prevent from "./pages/Prevent";
import End from "./pages/End";

function App() {
  if (window.location.pathname === "/treinamento-seguranca") {
    window.location.pathname = "/";
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Main />} />
          <Route path={`/introduction`} element={<Introduction />} />
          <Route path={`/identify`} element={<Identify />} />
          <Route path={`/prevent`} element={<Prevent />} />
          <Route path={`/end`} element={<End />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Introduction from "./pages/Introduction";
import Identify from "./pages/Identify";
import Prevent from "./pages/Prevent";
import End from "./pages/End";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/identify" element={<Identify />} />
          <Route path="/prevent" element={<Prevent />} />
          <Route path="/end" element={<End />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

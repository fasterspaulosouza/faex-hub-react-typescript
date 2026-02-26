import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Cadastro from "./components/Cadastro/Cadastro";
import Configuracao from "./components/Configuracao/Configuracao";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/" element={<Home />} />
        <Route path="/configuracao" element={<Configuracao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

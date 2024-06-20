import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Screens/Home";
import ProductInfo from "./Components/Screens/Product-Info";
import Checkout from "./Components/Screens/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* Definindo a rota para a página de produto com um parâmetro dinâmico */}
        <Route path="/product/:id" element={<ProductInfo />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

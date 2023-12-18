import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar1 from './components/NavBar1'
import ProductCard from "./components/ProductCart"
import CartPage from "./components/cartPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar1 />
        <Routes>
          <Route exact path="/" element={<ProductCard />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
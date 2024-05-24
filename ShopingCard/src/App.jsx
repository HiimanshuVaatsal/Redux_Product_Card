import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartPage from "./components/cartPage";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductCard />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
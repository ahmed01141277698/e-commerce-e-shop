import { BrowserRouter, Routes, Route, Link, Links } from "react-router-dom";

import Home from "./pages/Home";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Shop from "./pages/Shop";
import Contact from "./components/Contact";
import About from "./components/apout";
import Join from "./components/Join";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/join" element={<Join />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

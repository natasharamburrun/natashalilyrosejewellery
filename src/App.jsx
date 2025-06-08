import { BrowserRouter as ReactRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Navbar from "./components/NavBar";
import ProductPage from "./components/ProductPage";
import AboutPage from "./components/AboutPage";

import "./styles/styles.scss";

function App() {
  return (
    <ReactRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Shop" element={<ProductPage />} />
        <Route path="/About" element={<AboutPage />} />
      </Routes>
    </ReactRouter>
  );
}

export default App;

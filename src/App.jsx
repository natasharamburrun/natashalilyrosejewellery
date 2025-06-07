import { BrowserRouter as ReactRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Navbar from "./components/NavBar";
import ProductPage from "./components/ProductPage";

import "./styles/styles.scss";

function App() {
  return (
    <ReactRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Shop" element={<ProductPage />} />
      </Routes>
    </ReactRouter>
  );
}

export default App;

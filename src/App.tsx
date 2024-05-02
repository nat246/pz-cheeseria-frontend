import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";

import "bootstrap/dist/css/bootstrap.min.css";
import BrowsePage from "./pages/BrowsePage";
import HeaderNavbar from "./components/HeaderNavbar";
import ProductPage from "./pages/ProductPage";
import { useState } from "react";

function App() {
  const [ searchQuery, setSearchQuery ] = useState("");

  return (
    <BrowserRouter>
      <div className="App">
        <HeaderNavbar/>

        <Routes>
          <Route path="/" element={<HomePage setSearchQuery={setSearchQuery}/>} />
          <Route path="/browse" element={<BrowsePage searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

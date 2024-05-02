import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";

import "bootstrap/dist/css/bootstrap.min.css";
import BrowsePage from "./pages/BrowsePage";
import HeaderNavbar from "./components/HeaderNavbar";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderNavbar/>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

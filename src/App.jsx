import { CssBaseline } from "@mui/material";
import { Route, Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Navbar from "./components/navbar/Navbar";
import Product from "./pages/Product";
import ModelPage from "./pages/ModelPage";
import ModelLoad from "./pages/ModelLoad";
import PredictPage from "./pages/PredictPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PredictPage />} />
        <Route path="products" element={<Product />} />
        <Route path="model" element={<ModelPage />} />
        <Route path="preset" element={<ModelLoad />} />
      </Route>
    </Routes>
  );
}

export default App;

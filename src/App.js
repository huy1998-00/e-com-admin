import logo from "./logo.svg";
import "./App.css";
import Layout from "./layout/Layout";

import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import WellCome from "./Page/WellCome";
import ProductPage from "./Page/ProductPage";
import Login from "./Page/Login";
import Chat from "./Page/Chat";
import Dasboard from "./Page/Dasboard";
import { useContext } from "react";
import ProtectRoute from "./mdw/ProtectRoute";
import AuthContext, { AuthcontextProvider } from "./context/auth";
import AddProduct from "./Page/AddProduct";
import EditProduct from "./Page/EditProduct";
function App() {
  return (
    <AuthcontextProvider>
      <div className="App ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<WellCome />}></Route>
              <Route path="dashboard" element={<Dasboard />}></Route>
              <Route path="product" element={<ProductPage />}></Route>
              <Route path="product/:id" element={<EditProduct />}></Route>

              <Route path="addproduct" element={<AddProduct />}></Route>
              <Route path="chat" element={<Chat />}></Route>
            </Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthcontextProvider>
  );
}

export default App;

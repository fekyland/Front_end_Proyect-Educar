import "./App.scss";

import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import CursadaList from "./components/CursadaList/CursadaList";
import Login from "./components/Login/Login";
import RegisterUser from "./components/RegisterUser/RegisterUser";
import UserPanel from "./components/UserPanel/UserPanel";
import RegisterCursada from "./components/RegisterCursada/RegisterCursada";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import CursadaDetail from "./components/CursadaDetail/CursadaDetail"
import  Header  from "./components/Header/Header";
import CursadaSearch from "./components/CursadaSearch/CursadaSearch";
import Home from "./components/Home/Home";
import ShopForm from "./components/ShopForm/ShopForm";
function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes> 
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/cursadas" element={<CursadaList/>} />    
        <Route path="/cursadas/id/:id" element={<CursadaDetail/>} />
        <Route path="/login" element={<Login />} />
       <Route path="/registeruser" element={<RegisterUser/>} />
       <Route path="/registercursada" element={<RegisterCursada/>} />
       <Route path="/userpanel"element={<UserPanel/>} />
       <Route path="/adminpanel"element={<AdminPanel/>} />
       <Route path="/cursadas/search/:search"element={<CursadaSearch/>} />
       <Route path="/home"element={<Home/>} />
       <Route path="cursadas/shopform"element={<ShopForm/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

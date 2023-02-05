import "./App.scss";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import CursadaList from "./components/CursadaList/CursadaList";
import Login from "./components/Login/Login";
import RegisterUser from "./components/RegisterUser/RegisterUser";
import UserPanel from "./components/UserPanel/UserPanel";

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Navigate to="/cursos" />} />
        <Route path="/cursos" element={<CursadaList/>} />    
        <Route path="/login" element={<Login />} />
       <Route path="/registeruser" element={<RegisterUser/>} />
       <Route path="/userpanel"element={<UserPanel/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

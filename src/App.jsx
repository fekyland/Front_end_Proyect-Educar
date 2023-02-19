import './App.scss'

import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import CursadaList from './components/CursadaList/CursadaList'
import Login from './components/Login/Login'
import RegisterUser from './components/RegisterUser/RegisterUser'
import UserPanel from './components/UserPanel/UserPanel'
import RegisterCursada from './components/RegisterCursada/RegisterCursada'
import CursadaDetail from './components/CursadaDetail/CursadaDetail'
import Header from './components/Header/Header'
import CursadaSearch from './components/CursadaSearch/CursadaSearch'
import CursadaComprada from './CursadaComprada/CursadaComprada'
import AdminPanel from './AdminPanel/AdminPanel'
import MisCompras from './components/MisCompras/MisCompras'
import ReactYoutube from './components/ReactYoutube/ReactYoutube'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
         
          <Route path="/" element={<Navigate to="/cursadas" />} />
          <Route path="/cursadas" element={<CursadaList />} />
          <Route path="/cursadas/id/:id" element={<CursadaDetail />} />
          <Route path="/cursadas/registercursada" element={<RegisterCursada />} />
          <Route path="/cursadas/search/:search" element={<CursadaSearch />} />
          <Route path="/cursadas/cursadacomprada/:id" element={<CursadaComprada/>} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/registeruser" element={<RegisterUser />} />   
          <Route path="/users/userpanel" element={<UserPanel />} />
          <Route path="/users/adminpanel" element={<AdminPanel />} />
          <Route path="/users/userpanel/miscompras" element={<MisCompras />} />
          <Route path="/cursadas/reactyoutube" element={<ReactYoutube />} />
          
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

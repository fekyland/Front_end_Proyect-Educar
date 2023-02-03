import "./App.scss";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Index from "./components/Index";


function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      <Routes> 
        <Route path="/index" element={<Index/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

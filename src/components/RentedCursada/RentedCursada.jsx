import React, { useEffect, useState } from "react"
import "./RentedCursada.scss";

import { useSelector } from "react-redux";
import Cursada from "../Cursada/Cursada";

export default function RentedCursada({backstatus}) {
    const { cursadas } = useSelector((state)=>state.cursadas)
    console.log(cursadas)
  
   return (
      <div className="movie-list">
        <button onClick={() => backstatus(false)}>volver</button>
         <div className="container pt-5 pb-5">
            <h1 className="h1  mb-5 ">Cursadas</h1>

            <div className="d-flex flex-wrap justify-content-center gap-5 mb-5">
               {cursadas.length > 0 &&
                  cursadas.map((cursada) => <Cursada key={cursada.id} movie={cursada} />)}
            </div>
         </div>
      </div>
   );
}

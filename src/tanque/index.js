import { useState } from "react";

export default function Tanque(){
    const [km, setKm] = useState(0);
    const [tanque, setTanque] = useState(0);
    const [consumo, setConsumo] = useState(0)
    const [resultado, setResultado] = useState(0)

    function calcularParadas(){
       let x = km / consumo / tanque;
       setResultado(x)
    }


    return(
        <main >
         <h1>Tanque</h1>
         <div> KM <input type="number" value={km} onChange={e => setKm(Number(e.target.value))}></input> </div>
         <div> tanque<input type="number" value={tanque} onChange={e => setTanque(Number(e.target.value))}></input> </div>
         <div> consumo <input type="number" value={consumo} onChange={e => setConsumo(Number(e.target.value))}></input> </div>
         <button onClick={calcularParadas}>Vereficar</button>
         <div>  {resultado} </div>
 
        </main>)
 

  }

   
   




    

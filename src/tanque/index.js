import { useState } from "react";
import './index.scss'

export default function Tanque(){
    const [km, setKm] = useState(0);
    const [tanque, setTanque] = useState(0);
    const [consumo, setConsumo] = useState(0)
    const [resultado, setResultado] = useState(0)

    function calcularParadas(){
       let x = km / consumo / tanque;
       
        setResultado(Math.ceil (x));
       
       
       
     
    }


    return(
        <main className="pagina-combustivel">

        <h1> <span className="nome-1">Jaqueline </span> / <span className="nome-2">Vidal </span> Prova 4 Bimestre INFO A</h1>  
         

         <section className="conteiner-1">
         <h2> Calcular Paradas</h2>
         <div> Km Quilometros Totais: <input className="input" type="number" value={km} onChange={e => setKm(Number(e.target.value))}></input> </div>
         <div> Capacidade do Tanque: <input  className="input" type="number" value={tanque} onChange={e => setTanque(Number(e.target.value))}></input> </div>
         <div> Quilometros por Litros:  <input  className="input" type="number" value={consumo} onChange={e => setConsumo(Number(e.target.value))}></input> </div>
         <button className="botao" onClick={calcularParadas}>Vereficar</button>
         <div className="resposta"> Serão necessarios:  {resultado} Paradas </div>
         
          <img className="gaso" src="/opa.jpg" alt="opa"/>
         </section>
        
 
        </main>)
 

  }

   
   




    

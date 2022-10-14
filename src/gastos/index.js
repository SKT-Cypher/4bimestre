import { useState } from "react";
import './index.scss';

export default function Gastos(){
    const [temperatura, setTemperatura] = useState('');
    const [resultado, setResultado] = useState('')

  function calculoTemperatura(){
   if(temperatura >= 41 )
  {
    return setResultado("Hipertemia")
  }
  else if (temperatura >= 39.6 && temperatura < 41){
    return setResultado ("Febre alta")
  }

  else if (temperatura >= 37.6 && temperatura < 39.6){
    return setResultado ("Febre")
  }

  else if (temperatura >= 36 && temperatura < 37.6){
    return setResultado ("Normal")
  }

  else {
    return setResultado ("Hipotemia")
  }

 

   
  }

   
    return(
       <main className="page-temperatura">

      <section className="conteiner-1">
      <h1>Gastos</h1>
        <div> informe seus ganhos:  <input className="input" type="number" value={temperatura} onChange={e => setTemperatura(Number(e.target.value))}></input> </div>
        <div> informe seus gastos:  <input className="input" type="number" value={temperatura} onChange={e => setTemperatura(Number(e.target.value))}></input> </div>
        <button className="botao" onClick={calculoTemperatura}>Vereficar</button>
        <div>  {resultado} </div>
        <img className="gaso" src="/aboa.jpg" alt="opa"></img>
      </section>
       

       </main>)
}




    

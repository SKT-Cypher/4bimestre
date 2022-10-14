import { useState } from "react";
import './index.scss';

export default function Gastos(){
    const [ganhos, setGanho] = useState('');
    const [gastos, setGastos] = useState('');
    const [resultado, setResultado] = useState('')
    

    

  function calculodeGastos(){

    let a = (ganhos/100) * 81;
    let b = (ganhos/100) * 51;
    let c = (ganhos/100) * 21;
    let d = (ganhos/100) * 0;

    let h = (ganhos/100) * 100
    let e = (ganhos/100) * 80;
    let f = (ganhos/100) * 50;
    let g = (ganhos/100) * 20;
  


   if(gastos > ganhos )
  {
    return setResultado("Orçamento comprometido! Hora de rever seus gastos!")
  }
  else if (gastos > a && gastos < h){
    return setResultado ("Cuidado, seu orçamento pode ficar comprometido!")
  }

  else if (gastos > b  && gastos < e){
    return setResultado ("Atenção, melhor conter os gastos!")
  }

  else if (gastos > c  && gastos < f){
    return setResultado ("Muito bem, seus gastos não ultrapassaram metade dos ganhos")
  }

  else if (gastos > d  && gastos < g){
    return setResultado ("Parabens")
  }

  

 

   
  }

   
    return(
       <main className="page-temperatura">

      <section className="conteiner-1">
      <h1>Gastos</h1>
        <div> informe seus ganhos:  <input className="input" type="number" value={ganhos} onChange={e => setGanho(Number(e.target.value))}></input> </div>
        <div> informe seus gastos:  <input className="input" type="number" value={gastos} onChange={e => setGastos(Number(e.target.value))}></input> </div>
        <button className="botao" onClick={calculodeGastos}>Vereficar</button>
        <div>  {resultado} </div>
        <img className="gaso" src='gastos.jpg' alt="k"></img>
      </section>
       

       </main>)
}




    

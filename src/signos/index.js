import { useState } from "react";
import './index.scss'

export default function MesDia(){
    const [mes, setMes] = useState('');
    const [dia, setDia] = useState(0);
    const [resultado, setResultado] = useState('')

  function logica(){
   if((mes === "setembro" && dia >= 23 && dia <=30 || (mes === "outubro" && dia >= 22 && dia <=31 )))
  {
    return setResultado("É libra")
  }
  else{
    return setResultado ("Não é libra")
  }

   
  }

   
    return(
       <main  className="page-signo">
        <section className="conteiner-1">
        <h1>Signos</h1>
        <div> Informe o Mes:  <input className="input" type="text" value={mes} onChange={e => setMes(e.target.value)}></input> </div>
        <div> Informe o Dia:  <input className="input" type="number" value={dia} onChange={e => setDia(Number(e.target.value))}></input> </div>
        <button className="botao" onClick={logica}>Vereficar</button>
        <div>  {resultado} </div>
        <img className="gaso" src="/signo.jpg" alt="opa"></img>

        </section> 
        
    

       </main>)
}




    

import { useState } from "react";
import './index.scss';
export default function Liquido(){
    const [din, setDin] = useState(0);
    const [descont, setDescont] = useState(0);
    const [bonus, setBonus] = useState(0)
    const [resultado, setResultado] = useState(0)

    function salario(){
       let d = (din * (descont/100) + din) - bonus
        setResultado(d);
    }


    return(
        <main className="page-salario">

        <section className="conteiner-1">
        <h1>Salario</h1>
         <div> Dinheiro: <input className="input" type="number" value={din} onChange={e => setDin(Number(e.target.value))}></input> </div>
         <div> Desconto: <input className="input" type="number" value={descont} onChange={e => setDescont(Number(e.target.value))}></input> </div>
         <div> Bonus - : <input className="input" type="number" value={bonus} onChange={e => setBonus(Number(e.target.value))}></input> </div>
         <button className="botao" onClick={salario}>Vereficar</button>
         <div>  {resultado} </div>

         <img className="gaso" src="/din.jpg" alt="opa"></img>
            </section>  
        
 
        </main>)
 

  }

   
   




    

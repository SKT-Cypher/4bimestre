import { useState } from "react";
import './index.scss';

export default function Contar(){
    const [inicio, setInicio] = useState(0);
    const [fim, setFim] = useState(0);
    const [resultado, setResultado] = useState(0);
    

    

  function contar(){
    let arr = []
    
   for(let cont = inicio; cont <= fim; cont++)
   arr.push(cont)
     setResultado (arr +  '');

   
  }

   
    return(
       <main className="page-temperatura">

      <section className="conteiner-1">
      <h1>contador</h1>
        <div> informe primeiro numero:  <input className="input" type="number" value={inicio} onChange={e => setInicio(Number(e.target.value))}></input> </div>
        <div> informe ultimo numero:  <input className="input" type="number" value={fim} onChange={e => setFim(Number(e.target.value))}></input> </div>
        <button className="botao" onClick={contar}>Vereficar</button>
        <div>  {resultado} </div>
       <img src="/123.webp" alt="opa"/>
      </section>
       

       </main>)
}




    

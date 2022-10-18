import { useState } from "react";
import './index.scss';

export default function Linhas() {
    const [linha, setLinha] = useState("");
    const [resultado, setResultado] = useState("* ")

  function estrelinha(){
    let arr = []
    let estrela = "* "
    
   for(let cont = 1; cont <= linha; cont++)
   arr.push(estrela)
     setResultado (arr);
  }
    return (
        <main className="page-temperatura">

      <section className="conteiner-1">
      <h1>estrelinha</h1>
        <div> informe os numero:  <input className="input" type="number" value={linha} onChange={e => setLinha(Number(e.target.value))}></input> </div>
    
        <button className="botao" onClick={estrelinha}>Vereficar</button>
        <div>  {resultado} </div>
       
      </section>
       

       </main>
    )
}
import { useState } from "react";
import './index.scss'

export default function Cinema() { 
    const [inteira, setInteira] = useState(0);
    const [meia, setMeia] = useState(0);
    const [diaSemana, setDiaSemana] = useState(" ");
    const [nacional, setNacional] = useState(" ");
    const [resultado, setResultado] = useState(0);

    function jaqueIngressos() {
        let total;

     if(nacional === true)
     {
        total = (inteira + meia) * 5
     }
     else if(diaSemana === "quarta") {
        total = (inteira + meia) * 14.25
     }
     else {
        total = inteira * 28.50 + meia * 14.25
     }

     setResultado(total)
    }

    return (
        <main className = "page-temperatura"> 
           <section className="conteiner-1">
      <h1> Cinema </h1>
        <div> informe o dia:  <input className="input" type="text" value={diaSemana} onChange={e => setDiaSemana(e.target.value)}></input> </div>
        <div> informe se é nacional :  <input className="input" type="checkbox" checked={nacional} onChange={e => setNacional(e.target.checked)}></input> </div>
        <div> informe as qtd inteiras:  <input className="input" type="text" value={inteira} onChange={e => setInteira(Number(e.target.value))}></input> </div>
        <div> informe as qtd meias:  <input className="input" type="text" value={meia} onChange={e => setMeia(Number(e.target.value))}></input> </div>

        <button className="botao" onClick={jaqueIngressos}>Vereficar</button>
        <div>  O total é de R$ {resultado}</div>
        <img className="gaso" src="cinema.jpg" alt="k"></img>

      </section>
        </main>
    )

}
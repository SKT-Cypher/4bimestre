import { useState } from "react";

export default function Liquido(){
    const [din, setDin] = useState(0);
    const [descont, setDescont] = useState(0);
    const [bonus, setBonus] = useState(0)
    const [resultado, setResultado] = useState(0)

    function salario(){
       let d = (din * (descont/100)+ din) - bonus
        setResultado(d);
    }


    return(
        <main >
         <h1>Salario</h1>
         <div> dinheiro <input type="number" value={din} onChange={e => setDin(Number(e.target.value))}></input> </div>
         <div> desconto <input type="number" value={descont} onChange={e => setDescont(Number(e.target.value))}></input> </div>
         <div> bonus <input type="number" value={bonus} onChange={e => setBonus(Number(e.target.value))}></input> </div>
         <button onClick={salario}>Vereficar</button>
         <div>  {resultado} </div>
 
        </main>)
 

  }

   
   




    

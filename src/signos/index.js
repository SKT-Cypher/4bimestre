import { useState } from "react";

export default function MesDia(){
    const [mes, setMes] = useState('');
    const [dia, setDia] = useState(0);
    const [resultado, setResultado] = useState('')

  function logica(){
    let msg =''
    if (mes != 'outubro' && mes != 'setembro')
    return msg = ' mes invalido'
    setResultado(msg)

   
  }

   
    return(
       <main >
        <h1>Signos</h1>
        <div> mes <input type="text" value={mes} onChange={e => setMes(e.target.value)}></input> </div>
        <div> dia <input type="number" value={dia} onChange={e => setDia(Number(e.target.value))}></input> </div>
        <div>  {resultado} </div>
        <button onClick={logica}>Vereficar</button>


  
        
    

     
    

       </main>)
}




    

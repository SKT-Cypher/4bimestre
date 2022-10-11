import { useState } from "react";

export default function Temperatura(){
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
       <main >
        <h1>Temperatura</h1>
        <div> informe a temperatura:  <input type="number" value={temperatura} onChange={e => setTemperatura(Number(e.target.value))}></input> </div>
        <button onClick={calculoTemperatura}>Vereficar</button>
        <div>  {resultado} </div>


      
        
    

     
    

       </main>)
}




    

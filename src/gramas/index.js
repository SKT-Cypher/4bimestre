import { useState } from "react";
import './index.scss';

export default function Soveteria() {
    const [gramas, setGrmas] = useState(0);
    const [resul, setResul] = useState(0);


    function calcularGramas(){
   let a = 0.035;
   let b = a * gramas

   let c = 0.030;
   let d = c * gramas;

   if(gramas < 0){
    return setResul("Peso invalido")
   }
   setResul(b);

   if(gramas > 1000){
   setResul(d)
   }
 


}

    return(
        <main className="page-gramas">
           <section className="conteiner-1">
           <h1> Sorvete</h1>

          <div> Coloque a quantidade de Gramas: <input className="input" type="number" value={gramas} onChange={e => setGrmas(Number(e.target.value))}></input> </div>
          <button className="botao" onClick={calcularGramas}> Calcular </button>
          <div> Seu sorverte deu R$ {resul} </div>
          <img className="gaso" src="/sorvete.jpg" alt="aoba"/>
           </section>
           

           
        </main>
    )
}

 


    

    
 



    

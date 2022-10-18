import { useState } from "react";
import './index.scss';

export default function Retangulo(){
   const [base, setBase] = useState (0)
   const [altura, setAltura] = useState(0);
   const [resul, setResul] = useState(0);

   

   
  

     function desenhar(){
        let aste = "* ";
        let arr = []
        
       
        for (let linha = 1; linha <= base; linha ++){
            
           
            for (let coluna = 1; coluna <= altura; coluna ++){
              
              
               arr.push(aste)
                
              setResul(arr)
               

            }

       
        }
     }

     return(
        <main className="page-temperatura">
 
       <section className="conteiner-1">
       <h1>desenhar retangulo</h1>
         <div> informe a base:  <input className="input" type="number" value={base} onChange={e => setBase(Number(e.target.value))}></input> </div>
         
         <div> informe a altura:  <input className="input" type="number" value={altura} onChange={e => setAltura(Number(e.target.value))}></input> </div>
         <button className="botao" onClick={desenhar}>Vereficar</button>
         <div className="resul">  {resul} </div>
        
        
       </section>
        
 
        </main>)

  }

   
    
    

import { useState } from "react";
import './index.scss';

export default function Retangulo(){
   const [base, setBase] = useState (0)
   const [altura, setAltura] = useState(0);
   const [resul, setResul] = useState(0);

   
  
  
   let retangulo = [];
   let linhaRetangulo = '';

   function asteristico(event){
    if(event.target.checked){
        linhaRetangulo = '*'
    }
   }

   function circulo(event){
    if(event.target.checked){
        linhaRetangulo = 'o'
    }
   }

   function quadrado(event){
    if(event.target.checked){
             linhaRetangulo += '▫'
             
        }
       
    }

    function desenhar(){
        for (let coluna = 1; coluna <= altura; coluna++) {
            for (let linha = 1; linha <= base; linha++) {
                linhaRetangulo += '*'
            }
            retangulo.push(linhaRetangulo)
            linhaRetangulo = '\n'
            setResul(retangulo)
        }
    }
    
   
   
    
    

     return(
        <main className="page-temperatura">
 
       <section className="conteiner-1">
      
       
       
       <h1>desenhar retangulo</h1>

       <div className="sub"> 
       <input type="radio" name="quiz" onChange={asteristico} /> asteristico
       <input type="radio" name="quiz" onChange={circulo} /> circulo
       <input type="radio" name="quiz" onChange={quadrado} /> Quadrado
       </div>
         <div> informe a base:  <input className="input" type="number" value={base} onChange={e => setBase(Number(e.target.value))}></input> </div>
         
         <div> informe a altura:  <input className="input" type="number" value={altura} onChange={e => setAltura(Number(e.target.value))}></input> </div>
         <button className="botao" onClick={desenhar}>Vereficar</button>
      
         <div className="resul">
           <div>{resul}</div> 
            </div> 
         
        
       </section>
        
 
        </main>)

  


     
    }


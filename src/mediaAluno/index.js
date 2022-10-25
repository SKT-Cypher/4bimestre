import './index.scss';

import { useState } from 'react';

export default function MediaAlunos(){
    const [aluninhos, setAluninhos] = useState(0);
    const [nota, setNota] = useState(0);
    const [resultado, setResultado] = useState(0);

 
    function contarAlunos(){
        let arr = [];
        
        
       for(let cont = 1; cont <= aluninhos; cont++)
       arr.push( cont + "\n")
         setResultado (arr);
    
       
      }

    return (

        <main>
            <h1>Media aAluno</h1>

        <div> Alunos  <input type='number' value={aluninhos} onChange={e => setAluninhos (Number(e.target.value))}></input></div>
      
        <button className="botao" onClick={contarAlunos}>Vereficar</button>
        <div className='resultado'>{resultado}</div>
        </main>
    )
}
import './index.scss';
import { useState } from 'react';

export default function MediaAlunos(){
    const [aluninhos, setAluninhos] = useState(0);
    const [nota, setNota] = useState([]);
    const [resultado, setResultado] = useState(0);
    let arr = [];
    let input = <input  className="inputt" type='number' ></input> 
   
    function contarAlunos(){
        
        let alun =  'aluno:'
       
       
        
       for(let cont = 1; cont <= aluninhos; cont++)
       arr.push(alun, cont, input , "\n") 
       setResultado(arr);
      }

      

    return (

        <main>
            <h1>Media aAluno</h1>

        <div> Alunos  <input type='number' value={aluninhos} onChange={e => setAluninhos (Number(e.target.value))}></input></div>
      
        <button className="botao" onClick={contarAlunos}>Vereficar</button>
        <div className='resultado'>{resultado}</div>

        <button className="botao" onClick={''}>Vereficar Nota alta</button>
       
        <button className="botao" onClick={''}>Vereficar Nota baixa</button>
        <button className="botao" onClick={''}>Vereficar Media</button>
        </main>
    )
}
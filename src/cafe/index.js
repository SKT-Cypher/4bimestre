import { useState } from 'react'
import './index.scss'

export default function Cafe() {

    const [estudantes, setEstudantes] =useState(0)
    const [litros, setLitros] =useState(0)
    const [capacidade, setCapacidade] =useState(0)
    const [resul ,setResul] =useState(0)

    function CalcularCafe() {

         let aluninhos = (estudantes * litros)/1000

         for (let cafe=capacidade; cafe<=aluninhos; cafe+ (Math.floor(capacidade))){
            let cafecafe = cafe


        setResul(cafecafe) }


    }


    return(
        <div align='center' className='div-principal-cafe'>
            <h1 className='cu'>comi o cu de quem ta lendo</h1>
            <label>Quantos estudantes?</label>
            <input type='' onChange={e=> setEstudantes(e.target.value)}/>
            <label>Quanto cada um bebe?</label>
            <input onChange={e=> setLitros(e.target.value)}/>
            <label>Quanto de capacidade?</label>
            <input onChange={e=> setCapacidade(e.target.value)}/>
            <button onClick={CalcularCafe}>CALCULAR CAFÉ</button>
            <h1>{setResul}</h1>
        </div>
    )
}
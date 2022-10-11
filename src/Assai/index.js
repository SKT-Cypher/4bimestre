import { useState } from "react";
import './index.scss'

export default function Calculadora() {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [n3, setN3] = useState (0);
    const [desc, setDesc] = useState(0);
    const [resul, setResul] = useState(0);


    function açais(){
   let açai = n1 * 13.5 + n2 * 15 + n3 * 17.5;
    let d = açai - (açai * (desc/100));
   setResul(d);
 


}

    return(
        <section className="page-acai">
            
            <section className="conteiner-1">
            <h1> Açai</h1>
            
            <div> Açai peq: <input className="input" type="number" value={n1} onChange={e => setN1(Number(e.target.value))}></input> </div>
            <div> Açai med: <input className="input" type="number" value={n2} onChange={e => setN2(Number(e.target.value))}></input> </div>
            <div> Açai grd: <input  className="input" type="number" value={n3} onChange={e => setN3(Number(e.target.value))}></input> </div>
            <div> Açai dcs: <input  className="input" type="number" value={desc} onChange={e => setDesc(Number(e.target.value))}></input> </div>
            <div>  {resul} </div>

            <button className="botao" onClick={açais}> Calcular </button>
            <img className="gaso" src="/cai2.jpg" alt="opa"/>
            </section>
            
        </section>
    )
}

 


    

    
 



    

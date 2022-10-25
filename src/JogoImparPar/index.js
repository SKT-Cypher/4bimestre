import './index.scss';


export default function JogoImparPar(){

  var EscolhaDaPessoa= '';
  var EscolhaDoComputador = ''

  var EscolhaDaPessoa = prompt("par ou impar ?");
var DedosDaPessoa = prompt("Digite quantos dedos você coloca:");
if(EscolhaDaPessoa === "par")
{
EscolhaDoComputador = "impar";
}
else
{
EscolhaDoComputador = "par";
}
var GeraNumero = Math.random()*10;
var DedosDoComputador = Math.round(GeraNumero);
function calcula()
{
var SomaDosDedos = parseInt(DedosDaPessoa) + parseInt(DedosDoComputador);
var IdentificaPar = SomaDosDedos % 2;
if(IdentificaPar === 0)
{
if(EscolhaDaPessoa === "par")
{
return "Você pediu "+EscolhaDaPessoa+" e<br>VOCÊ VENCEU! <br>o computador pôs "+DedosDoComputador+" dedos.<br>e você pôs "+DedosDaPessoa+" dedos.<br>o total deu "+SomaDosDedos+" dedos, que é PAR!";
}
else
{
return "Você pediu "+EscolhaDaPessoa+" e<br>O COMPUTADOR VENCEU! <br>o computador pôs "+DedosDoComputador+" dedos<br>e você pôs "+DedosDaPessoa+" dedos. <br>o total deu "+SomaDosDedos+" dedos, que é PAR!";
}
}
else
{
if(EscolhaDaPessoa === "impar")
{
return "Você pediu "+EscolhaDaPessoa+" e<br>VOCÊ VENCEU! <br>o computador pôs "+DedosDoComputador+" dedos.<br>e você pôs "+DedosDaPessoa+" dedos.<br>o total deu "+SomaDosDedos+" dedos, que é IMPAR!";
}
else
{
return "Você pediu "+EscolhaDaPessoa+" e<br>O COMPUTADOR VENCEU! <br>o computador pôs "+DedosDoComputador+" dedos<br>e você pôs "+DedosDaPessoa+" dedos. <br>o total deu "+SomaDosDedos+" dedos, que é IMPAR!";
}
}
}
var Resultado = calcula();
document.write ("<p align='center'><font size='30' color='blue'>"+Resultado);


  
      

    return(

     
      <main>
      
     
      
   
     
      </main>


        
    )
}
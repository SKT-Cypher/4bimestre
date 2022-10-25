import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Prova from './Assai';
import Signos from './signos';
import Liquido from './salario';
import Tanque from './tanque';
import Soveteria from './gramas';
import Temperatura from './temperatura';
import Gastos from './gastos';
import Cinema from './cinema';
import Contar from './contarAte';
import Retangulo from './retangulo';
import Linhas from './linha';
import Cafe from './cafe';
import JogoVelha from './jogoVelha';
import JogoImparPar from './JogoImparPar';
import Jokenpo from './JogoJokênpo';
import MediaAlunos from './mediaAluno';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Prova/>}/>
      <Route path='/signo' element={<Signos/>}/>
      <Route path='/liquido' element={<Liquido/>}/>
      <Route path='/tanque' element={<Tanque/>}/>
      <Route path='/sovete' element={<Soveteria/>}/>
      <Route path='/temperatura' element={<Temperatura/>}/>
      <Route path='/gastos' element={<Gastos/>}/>
      <Route path='/cinema' element={<Cinema/>}/>
      <Route path='/contar' element={<Contar/>}/>
      <Route path='/retangulo' element={<Retangulo/>}/>
      <Route path='/linha' element={<Linhas/>}/>
      <Route path='/cafe' element={<Cafe/>}/>
      <Route path='/jogoJaque' element={<JogoVelha/>}/>
      <Route path='/jogoImparPar' element={<JogoImparPar/>}/>
      <Route path='/jokenpo' element={<Jokenpo/>}/>
      <Route path='/media' element={<MediaAlunos/>} />
    

      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);




import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Site from './Site';
import Rodape from './components/Rodape';
import Cabecalho from './components/Cabecalho';
import Inicio from './components/Inicio';
import Servicos from './components/Servicos';
import Portfolio from './components/Portfolio';
import Precos from './components/Precos';
import Contatos from './components/Contatos'
// Área Admin
import Admin from './Admin/Admin';
import AdminPortfolio from './Admin/AdminPortfolio';
import Login from './Admin/Login';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Cabecalho />

      <Route path='/' exact component={Inicio} />
      <Route path='/Servicos' component={Servicos} />
      <Route path='/Portfolio' component={Portfolio} />
      <Route path='/Precos' component={Precos} />
      <Route path='/Contatos' component={Contatos} />

      <Route path='/Admin' component={Admin}/>    
      <Route path='/Login' component={Login} />  

      <Rodape />
    </div>
    </BrowserRouter>
  );
}

export default App;

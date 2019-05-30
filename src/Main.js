import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

import Home from './Home';
import Game from './TicTacToe';
import Api from './Api';
import Tasks from './Tasks';

function Main () {
  return (
    <HashRouter>
      <div>
        <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/game">Tic Tac Toe Game</NavLink></li>
          <li><NavLink to="/api">Using API</NavLink></li>        
          <li><NavLink to="/2do">Things to do!</NavLink></li>        
        </ul>
        <div className="content">
          <Route exact path ="/" component={Home}/>
          <Route path ="/game" component={Game}/>
          <Route path ="/api" component={Api}/>
          <Route path ="/2do" component={Tasks}/>
          
        </div>
      </div>
    </HashRouter>  
  );
}

export default Main;
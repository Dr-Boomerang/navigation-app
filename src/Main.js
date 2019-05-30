import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './Home';
import Game from './TicTacToe';
import Api from './Api';
import Tasks from './Tasks';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';

// why this one is like that?
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,    
  },  
}))


function Main () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="Menu"
            onClick={() => {alert('hi')}}
          >
            <MenuIcon />
          </IconButton>
          
          </Toolbar>          
        </AppBar>       
      
      
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
      </div>
  );
}

export default Main;
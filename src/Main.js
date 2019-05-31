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
import Drawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
  paper: {
    background: '#191919',
  }
}))

// how to create that in a smart way instead of typing so much
// how do I call the toggle drawer from here?
// combine git with this friend

{/* <li><NavLink exact to="/">Home</NavLink></li>
            <li></li>
            <li><NavLink to="/api">Using API</NavLink></li>        
            <li><NavLink to="/2do">Things to do!</NavLink></li>    */}

function Main () {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  function toggleDrawer() {
    setState(!state);
  }

  // now what I want is to make sure I don't see those annoying links around me
  // think about the location of this function
  const navigationItems = [
    { address: '/',
      label: 'Home' },
    { address: '/game',
      label: 'Tic Tac Toe' },
    { address: '/api', 
      label: 'API Testing' },
    { address: '/2do', 
      label: 'My Tasks List' }
  ]
    
  // how to do the navigation in a smart way?
  // I have naes

  // how to do it black.
  
  // can I just do it in one function?
  // I need to understand
  function CreateList () {
    return (
      navigationItems.map((item) => {        
        return(
          
            <ListItem button onClick={() => toggleDrawer()}>
              <Typography variant="h6" color="red" >
              <NavLink to={item.address} color="red"> 
                <ListItemText 
                  primary={item.label}
                />
                </NavLink>
              </Typography>
            </ListItem>
          
        )
      })
    );
  }

  function MenuList () {
    return (
      <div>      
        <List>
          <CreateList/>
        </List>
      </div>
    );
  }

  // where is the right location of the drawer? Think about it
  return (
    <div className={classes.root}>
    <HashRouter>
      <AppBar position="static">
        <Toolbar>
          <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="Menu"
            onClick={() => toggleDrawer()}
          >

            <MenuIcon />
            
          </IconButton>
          <Drawer
          classes={{ paper: classes.paper}}
          open={state}
          onClose={toggleDrawer}              
          >
          
            <MenuList></MenuList>
          
          
          </Drawer>
        </Toolbar>          
      </AppBar>       
      <div className="content">
        <Route exact path ="/" component={Home}/>
        <Route path ="/game" component={Game}/>
        <Route path ="/api" component={Api}/>
        <Route path ="/2do" component={Tasks}/>
      </div>    
    </HashRouter>
    </div>
  );
}

export default Main;

// <NavLink to="/home"> 
//               <ListItem button onClick={() => toggleDrawer()}>
//                 <ListItemText primary="Home"/>
//               </ListItem>
//             </NavLink>
  
//             <NavLink to="/game">
//               <ListItem button onClick={() => toggleDrawer()}>
//                 <ListItemText primary="Tic Tac Toe Game"/>
//               </ListItem>
//             </NavLink>
  
//             <NavLink to="/api">
//               <ListItem button onClick={() => toggleDrawer()}>
//                 <ListItemText primary="Using API"/>
//               </ListItem>
//             </NavLink>
  
//             <NavLink to="/tasks" onClick={() => toggleDrawer()}>
//               <ListItem button>
//                 <ListItemText primary="More Things To Do"/>
//               </ListItem>
//             </NavLink>
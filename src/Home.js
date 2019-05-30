import React from 'react';

import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// function SwipeableTemporaryDrawer() {
// }

function Home() {
  const [state, setState] = React.useState(false);

  const sideList = (
    <List>
      <ListItem >
        <ListItemText primary="hello" />
      </ListItem>
    </List>
  )

            
  
  function toggleDrawer() {
    setState(!state);
  }
  
  return(
    <div>
      <p>
        Here I'm going to try all the new react concepts that I'm learning
        Have fun looking around!
      </p>  
      

      <Button variant="contained" onClick={toggleDrawer}>Click Me!</Button>
      <Drawer 
        open={state}
        onClose={toggleDrawer}              
      >
        {sideList}
      </Drawer>
    </div>
  );
}

export default Home;
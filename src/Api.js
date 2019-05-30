import React from 'react';
import axios from 'axios';
const API_URL = 'http://jsonplaceholder.typicode.com';

// start like that and move it to hooks when you're done
// also itai said that I should use the async and await here
class Api extends React.Component {
  componentDidMount() {
    const url = `${API_URL}/users/`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ users: data })
      console.log(this.state.users)
    })
  }
  render () {
    return (
      <h1>Testing...</h1>
    );
  }

}

export default Api;
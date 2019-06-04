import React from 'react';
import Axios from 'axios';

const API_KEY = 'abdf2728ed681096585f6a22980eff91';
const CITY_ID = 293397;
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?id=${CITY_ID}&APPID=${API_KEY}`;

// Examples to figure out how the promises work
// ============================================
// async function testFirst () {
//   await setTimeout(()=>{},1000)  
//   console.log("I'm the first");
// }

// function testSecond () {
//   console.log("I'm the second");
// }


// start like that and move it to hooks when you're done
// also itai said that I should use the async and await here
// how to connect the data from the API with the callback function.


// When you define a new promise, then you need to send a callback function
// async function test () {
//   let promise = new Promise((resolve, reject) => {
//     // the promise is waiting for the executor to finish working
//     // here we wait using setTimeout, which uses callback to work
//     setTimeout(() => reject(new Error("Whoops!")), 1000)
//   });
  
//   let result = await promise;
//   console.log(result);
// }


class Api extends React.Component {
  constructor(props) {
    super(props);
    // this is the way to do that in the constructor
    this.state = {
      temp: 'is being calculated'
    }
  }
  
  async getData() {  
    const response = await Axios({
      url: API_URL,
      method: 'get'
    })
  
    let temp = response.data.list[0].main.temp - 273.15
    temp = Math.round(temp * 10) / 10;
    temp = temp + ' Degrees Celsius';
    
    this.setState({
      temp: temp 
    })
  }
  
  componentDidMount() {        
    this.getData();        
  }
    
  // What is going on here?
  // axios.get(API_URL).then(response => {     
  //   const temperature = 
  // })
  // .then((data) => {
  //   this.setState({ users: data })      
  // })
  //   console.log()
  
  
  render () {
    // const result = test();
    // console.log(result);
    console.log(this.state);
    
    return (
      <h1>The temperature in Tel Aviv is {this.state.temp}</h1>
    );
  }

}

export default Api;
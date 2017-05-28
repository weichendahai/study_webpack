//hello.js


var config = require ('./data.json');
module.exports = function () {
  var greet = document.createElement('div');
  // greet.textContent = 'tt hi there and greetings !!';
  greet.textContent = config.hello_data;
  return greet;
}


// import React, {Component} from 'react'
// // import config from './data.json';

// class Hello extends Component{
  // render() {
      // return (
            // <div>
              // // {config.hello_data}
              // hello_data
            // </div>
          // );
    // }
// }

// export default Hello

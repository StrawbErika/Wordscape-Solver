import React from 'react';
import calculateInterest from './Nepomuceno.js';
export default class App extends React.Component {
  render() {
    return (<div>
      <h2>Gonna cry!</h2>
      <button onClick={calculateInterest("boi", "__")}> hey </button>

    </div>);
  }
}
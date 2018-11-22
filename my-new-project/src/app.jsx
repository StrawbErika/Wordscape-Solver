import { Button } from 'antd';
import React from 'react';
import calculateInterest from './Nepomuceno.js';
export default class App extends React.Component {
  render() {
    return (<div>
      <h2>Gonna cry!</h2>
      <Button type="primary" onClick={() => calculateInterest("noot noot", "_noot_")}> hey </Button>


    </div>);
  }
}
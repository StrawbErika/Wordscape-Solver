import { Button } from 'antd';
import React from 'react';
import calculateInterest from './Nepomuceno.js';
import DisplayWords from './DisplayWords'

export default class App extends React.Component {
  render() {
    var combinedWords = calculateInterest("enemy", "___")
    return (
      <div>
        <h2>Gonna cry!</h2>
        <Button type="primary" > hey </Button>
        {console.log("out of function")}
        {console.log(combinedWords)}
        {
          combinedWords.map((words, index) => {
            console.log('hey')
            return <DisplayWords key={index} data={words} />
          })
        }
      </div>
    );
  }
}
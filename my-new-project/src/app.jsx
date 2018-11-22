import { Button, Input } from 'antd';
import React from 'react';
import calculateInterest from './Nepomuceno.js';
import DisplayWords from './DisplayWords'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      letters: "",
      format: "",
      combinedWords: []
    }
    this.handleFormat = this.handleFormat.bind(this);
    this.handleLetters = this.handleLetters.bind(this);
    this.printWords = this.printWords.bind(this);
  }

  handleLetters(e) {
    this.setState({
      letters: e.target.value
    })
  }
  handleFormat(e) {
    this.setState({
      format: e.target.value
    })
  }
  printWords() {
    this.setState({
      combinedWords: calculateInterest(this.state.letters, this.state.format)
    })
  }
  render() {
    return (
      <div>
        <h2>Gonna cry!</h2>

        <Input placeholder="letters" onChange={this.handleLetters} value={this.state.letters} />
        <Input placeholder="format" onChange={this.handleFormat} value={this.state.format} />
        <Button type="primary" onClick={this.printWords}> hey </Button>
        <div>
          {
            this.state.combinedWords.map((words, index) => {
              return <DisplayWords key={index} data={words} />
            })
          }
        </div>
      </div>
    );
  }
}
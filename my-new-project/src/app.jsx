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
      finalWords: [],
      combinedWords: []
    }
    this.handleFormat = this.handleFormat.bind(this);
    this.handleLetters = this.handleLetters.bind(this);
    this.printWords = this.printWords.bind(this);
    this.checkWords = this.checkWords.bind(this);
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
  checkWords() {
    this.printWords()
    for (let j = 0; j < this.state.combinedWords.length; j++) {
      for (let i = 0; i < this.props.dictionary.length; i++) {
        if (this.state.combinedWords[j] === this.props.dictionary[i]) {
          this.setState({
            finalWords: this.state.finalWords.push(this.state.combinedWords[j])
          })
        }
      }
    }
    console.log(this.state.finalWords)
    // this.setState({
    //   combinedWords: this.state.finalWords
    // })
    // console.log(this.state.combinedWords)
  }
  render() {
    return (
      <div>
        <h2>Wordscape solver!</h2>

        <Input placeholder="letters" onChange={this.handleLetters} value={this.state.letters} />
        <Input placeholder="format" onChange={this.handleFormat} value={this.state.format} />
        <Button type="primary" onClick={this.checkWords}> hey </Button>
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
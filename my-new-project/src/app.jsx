import { Modal, Button, Input } from 'antd';
import React from 'react';
import calculateInterest from './Nepomuceno.js';
import DisplayWords from './DisplayWords'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      visible: false,
      letters: "",
      format: "",
      finalWords: [],
      combinedWords: []
    }
    this.handleFormat = this.handleFormat.bind(this);
    this.handleLetters = this.handleLetters.bind(this);
    this.printWord = this.printWord.bind(this);
    this.checkWord = this.checkWord.bind(this);
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

  }


  showModal() {
    this.setState({
      visible: true,
    });
  }

  handleOk(e) {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false,
      combinedWords: [],
      letters: "",
      format: ""
    });
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
  printWord() {
    this.setState({
      combinedWords: calculateInterest(this.state.letters, this.state.format)
    })
  }
  checkWord() {
    this.printWord()
    for (let j = 0; j < this.state.combinedWords.length; j++) {
      for (let i = 0; i < this.props.dictionary.length; i++) {
        if (this.state.combinedWords[j] === this.props.dictionary[i]) {
          this.setState({
            finalWords: this.state.finalWords.push(this.state.combinedWords[j])
          })
        }
      }
    }
    console.log('this is this.state.finalWords')
    console.log(this.state.finalWords)
    console.log(this.state.combinedWords)
    // this.setState({
    //   combinedWords: this.state.finalWords
    // })
    // console.log(this.state.combinedWords)
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div>
            <h2>Wordscape solver!</h2>

            <Input placeholder="letters" onChange={this.handleLetters} value={this.state.letters} />
            <Input placeholder="format" onChange={this.handleFormat} value={this.state.format} />
            <Button type="primary" onClick={this.checkWord}> hey </Button>
            <div>
              {
                this.state.combinedWords.map((words, index) => {
                  return <DisplayWords key={index} data={words} />
                })
              }
            </div>

          </div>

        </Modal>
      </div>
    );
  }
}





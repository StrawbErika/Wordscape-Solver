import { Modal, Button, Input } from 'antd';
import React from 'react';
import calculateInterest from './Nepomuceno.js';
import stringComparison from './StringComp.js'
import DisplayWords from './DisplayWords';


export default class WordscapeSolver extends React.Component {
    constructor() {
        super()

        this.state = {
            visible: false,
            letters: "",
            format: "",
            alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
            finalWords: [],
            combinedWords: []
        }
        this.handleFormat = this.handleFormat.bind(this);
        this.handleLetters = this.handleLetters.bind(this);
        this.handleLetterClick = this.handleLetterClick.bind(this);
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
            format: "",
            clicked: false
        });
    }

    handleLetters(e) {
        this.setState({
            letters: e.target.value.toUpperCase()
        })
    }
    handleLetterClick(e) {
        this.setState({
            letters: this.state.letters + e.target.value.toUpperCase()
        })
    }
    handleFormat(e) {
        this.setState({
            format: e.target.value.toUpperCase()
        })
    }
    printWord() {
        this.setState({
            combinedWords: calculateInterest(this.state.letters, this.state.format)
        })
    }

    checkWord() {
        this.setState({
            clicked: true
        })
        this.printWord()
        // error with push for 2nd button press
        for (let j = 0; j < this.state.combinedWords.length; j++) {
            for (let i = 0; i < this.props.dictionary.length; i++) {
                if (!stringComparison(this.state.combinedWords[j], this.props.dictionary[i])) {
                    this.setState({
                        finalWords: this.state.finalWords.push(this.state.combinedWords[j])
                    })
                }
            }
        }
        console.log(this.state.finalWords)

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
                        <div id="letters">
                            {
                                this.state.alphabet.map((letter, index) => {
                                    return <Button onClick={this.handleLetterClick} value={letter} type="primary" key={index} id="button">{letter}</Button>
                                })
                            }
                        </div>

                        <Input placeholder="letters selected" onChange={this.handleLetters} value={this.state.letters} />
                        <Input placeholder="format" onChange={this.handleFormat} value={this.state.format} />
                        <Button type="primary" onClick={this.checkWord}> hey </Button>
                        {
                            // problem area u can just delete
                            this.state.format === "" && this.state.clicked === true ? 'Format is required' :
                                //
                                <div>
                                    { // if change this to finalWords.map it says it is not a function
                                        this.state.combinedWords.map((words, index) => {
                                            return <DisplayWords key={index} data={words} />
                                        })
                                    }
                                </div>
                        }


                    </div>

                </Modal>
            </div>
        );
    }
}





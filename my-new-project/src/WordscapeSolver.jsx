import { Modal, Button, Input, Icon } from 'antd';
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
            combinedWords: [],
        }
        this.handleFormat = this.handleFormat.bind(this);
        this.handleLetters = this.handleLetters.bind(this);
        this.handleLetterClick = this.handleLetterClick.bind(this);
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
            clicked: false,
            finalWords: []
        });
    }

    handleLetters(e) {
        this.setState({
            letters: e.target.value.toUpperCase(),
            finalWords: []
        })
    }
    handleLetterClick(e) {
        this.setState({
            letters: `${this.state.letters}${e.target.value.toUpperCase()}`,
            finalWords: []
        })
    }
    handleFormat(e) {
        this.setState({
            format: e.target.value.toUpperCase(),
            finalWords: []
        })
    }


    checkWord() {
        this.setState({
            clicked: true
        })
        var dict = []
        var words = calculateInterest(this.state.letters, this.state.format)
        for (let i = 0; i < this.props.dictionary.length; i++) {
            if (!stringComparison(this.props.dictionary[i], this.state.format)) {
                dict.push(this.props.dictionary[i])
            }
        }

        var allWords = []
        for (let i = 0; i < dict.length; i++) {
            for (let j = 0; j < words.length; j++) {
                if (!stringComparison(words[j], dict[i])) {
                    allWords = [...allWords, words[j]]; //oops
                    break;
                }
            }
        }
        this.setState({
            finalWords: allWords
        })

    }
    render() {

        return (
            <div>
                <Button id="bulb" type="primary" shape="circle" icon="bulb" onClick={this.showModal} />
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
                                    return <Button onClick={this.handleLetterClick} value={letter} type="primary" key={index} id="solverButton">{letter}</Button>
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
                                    {
                                        this.state.finalWords.map((words, index) => {
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





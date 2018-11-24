import React from 'react';
import Frost2 from './Frost22802'
import BoardRow from './BoardRow'
import { Button, Input } from 'antd';

export default class Board extends React.Component {

    constructor() {
        super()

        this.state = {
            dimension: Frost2[0],
            letters: Frost2[1],
            board: Frost2[2],
            answers: Frost2[3],
            word: ""
        }
        this.handleLetterClick = this.handleLetterClick.bind(this);
        this.handleLetters = this.handleLetters.bind(this);
        this.checkWord = this.checkWord.bind(this);
    }
    handleLetterClick(e) {
        this.setState({
            word: this.state.word + e.target.value.toUpperCase()
        })
    }
    handleLetters(e) {
        this.setState({
            word: e.target.value.toUpperCase()
        })
    }
    checkWord(e) {
        //figure out how to check answers
        ans = this.state.answers
        for (let i = 0; i < ans.length; i++) {
            if (word === ans[i][0]) {
                ansI = ans[i]
                for (let j = 0; j < word.length; j++) {
                    // board[ansI[]]
                }
            }
        }
        this.setState({
            word: e.target.value.toUpperCase()
        })
    }


    render() {
        return (
            <div>
                <div>
                    {
                        this.state.board.map((list, index) => {
                            return <BoardRow key={index} row={list} />
                        })
                    }
                </div>
                <div id="letters">
                    {
                        this.state.letters.map((letter, index) => {
                            return <Button type="primary" onClick={this.handleLetterClick} value={letter} key={index} id="button">{letter}</Button>
                        })
                    }
                </div>
                <div id="letters">
                    <Input value={this.state.word} onChange={this.handleLetters} />
                    <Button onClick={this.checkWord}> Go!</Button>
                </div>

            </div>
        );
    }
}

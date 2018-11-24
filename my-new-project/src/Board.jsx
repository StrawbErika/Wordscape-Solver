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
        var newBoard = this.state.board
        var ans = this.state.answers
        for (let i = 0; i < ans.length; i++) {
            if (this.state.word === ans[i][0]) {
                for (let j = 0; j < this.state.word.length; j++) {
                    // console.log(ans[i][0] + " " + this.state.word)
                    // console.log(
                    //     "letter: " + newBoard[ans[i][j + 1][0]][ans[i][j + 1][1]][0] + ", bool" + 
                    // )
                    // console.log(
                    //     "[" + ans[i][j + 1][0] + ", " + ans[i][j + 1][1] + "]"
                    // )
                    // console.log(newBoard[0][2][0])
                    newBoard[ans[i][j + 1][0]][ans[i][j + 1][1]][1] = true
                }
            }
        }
        console.log(newBoard)
        this.setState({
            board: newBoard
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
                {/* {console.log(this.state.board)} */}

            </div>
        );
    }
}

import React from 'react';
import Frost2 from './Frost22802'
import BoardRow from './BoardRow'

export default class Board extends React.Component {

    constructor() {
        // console.log(Frost2)
        super()

        this.state = {
            dimension: Frost2[0],
            letters: Frost2[1],
            board: Frost2[2]
        }
    }

    render() {
        // console.log(this.state.dimension)
        // console.log(this.state.letters)
        // console.log(this.state.board[0])
        return (
            <div>

                {
                    this.state.board.map((list, index) => {
                        return <BoardRow key={index} row={list} />
                    })
                }
            </div>

        );
    }
}

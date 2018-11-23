import React from 'react';
import Frost2 from './Frost22802'
import BoardRow from './BoardRow'
import { Button } from 'antd';

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
                            return <Button type="primary" key={index} id="button">{letter}</Button>
                        })
                    }
                </div>

            </div>
        );
    }
}

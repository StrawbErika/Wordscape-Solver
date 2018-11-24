import React from 'react';
import WordscapeSolver from './WordscapeSolver';
import Board from './Board';

export default class Wordscape extends React.Component {
    render() {
        return (
            <div>
                <WordscapeSolver dictionary={this.props.dictionary} />
                <Board />
            </div>
        );
    }
}





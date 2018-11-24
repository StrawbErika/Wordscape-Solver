import React from 'react';
import Board from './Board';

export default class Wordscape extends React.Component {
    render() {
        return (
            <div>
                <Board dictionary={this.props.dictionary} />
            </div>
        );
    }
}





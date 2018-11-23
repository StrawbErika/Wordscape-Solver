import { Row, Col } from 'antd';
import React from 'react';
import BoardCol from './BoardCol';

export default class BoardRow extends React.Component {
    render() {
        var boardRow = this.props.row
        console.log(boardRow)
        // console.log(this.state.letters)
        // console.log(this.state.board[0])
        return (
            <div>
                <Row type="flex" justify="center">
                    {
                        boardRow.map((letters, index) => {
                            if (letters != " ") {
                                return <BoardCol key={index} val={letters} />
                            } else {
                                return <Col id="input"> {letters} </Col>
                            }
                        })
                    }
                </Row>

            </div>

        );
    }
}

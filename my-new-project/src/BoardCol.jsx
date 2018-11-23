import { Col, Input } from 'antd';
import React from 'react';
export default class BoardCol extends React.Component {
    render() {
        // console.log(this.state.board[0])
        return (
            <div class="colorCol">
                <Col span={5}>
                    <Input placeholder={this.props.val} id="input" />
                </Col>

            </div>

        );
    }
}

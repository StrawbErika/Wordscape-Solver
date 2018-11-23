import { Col, Input } from 'antd';
import React from 'react';

export default class BoardCol extends React.Component {
    render() {
        // console.log(this.state.board[0])
        return (
            <div>

                <Col span={5}>
                    {/* <Input placeholder={this.props.val} value={this.props.val} /> */}
                    {this.props.val}
                </Col>

            </div>

        );
    }
}

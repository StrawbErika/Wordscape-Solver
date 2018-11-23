import { Row, Col } from 'antd';
import React from 'react';
import Frost2 from './Frost22802'

export default class Board extends React.Component {

    render() {
        return (
            <div>
                <Row type="flex" justify="center">
                    <Col span={4}>col-4</Col>
                    <Col span={4}>col-4</Col>
                    <Col span={4}>col-4</Col>
                    <Col span={4}>col-4</Col>
                </Row>
            </div>

        );
    }
}

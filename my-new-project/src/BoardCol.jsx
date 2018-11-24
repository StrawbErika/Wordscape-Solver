import { Col, Button } from 'antd';
import React from 'react';
export default class BoardCol extends React.Component {
    render() {
        return (
            <div class="colorCol">
                <Col span={5}>
                    <Button id="input"></Button>
                </Col>

            </div>

        );
    }
}

import { Col, Button } from 'antd';
import React from 'react';
export default class BoardCol extends React.Component {

    render() {
        return (
            <div class="colorCol">
                {
                    this.props.letter[1] === false ?
                        <Col span={3}>
                            <Button id="blank"></Button>
                        </Col>
                        :
                        <Col span={3}>
                            <Button id="correct"> {this.props.letter[0]}</Button>
                        </Col>


                }
            </div>

        );
    }
}

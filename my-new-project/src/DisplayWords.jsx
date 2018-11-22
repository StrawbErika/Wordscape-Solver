import React from 'react';

export default class DisplayWords extends React.Component {
    render() {
        return (
            <div>
                <p> {this.props.data}</p>
            </div>
        );
    }
}
import React from 'react';
import Wordscape from './Wordscape';

export default class App extends React.Component {
  render() {
    console.log(this.props.dictionary[0])
    return (
      <div>
        <Wordscape dictionary={this.props.dictionary} />
      </div>
    );
  }
}





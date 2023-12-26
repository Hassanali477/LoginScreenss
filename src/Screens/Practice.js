import {Text, View} from 'react-native';
import React, {Component} from 'react';
import PresentationalComponent from '../../PresentationalComponent';
export default class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myState:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod',
    };
  }
  updateState = () => this.setState({myState: 'The state is updated'});
  render() {
    return (
      <View>
        <PresentationalComponent
          updateState={() => this.updateState()}
          myState={this.state.myState}
        />
      </View>
    );
  }
}

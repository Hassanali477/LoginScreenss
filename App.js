import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import Navigation from './src/Navigation/Navigation';

export default class App extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Navigation />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

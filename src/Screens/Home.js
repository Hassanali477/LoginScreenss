import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [
        {
          id: 0,
          name: 'Ben',
        },
        {
          id: 1,
          name: 'Robert',
        },
        {
          id: 2,
          name: 'Mary',
        },
        {
          id: 3,
          name: 'Susan',
        },
      ],
    };
  }
  alertItemName = item => {
    this.alertItemName(item.name);
  };
  render() {
    return (
      <View>
        {/* {this.state.names.map((item, index) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={styles.container}
              onPress={() => this.alertItemName(item)}>
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          );
        })} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#d9f9b1',
    alignItems: 'center',
  },
  text: {
    color: '#4f603c',
  },
});

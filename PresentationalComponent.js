import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

const PresentationalComponent = ({updateState, myState}) => {
  return (
    <View>
      <Text onPress={updateState} style={styles.myState}>
        {myState}
      </Text>
    </View>
  );
};

export default PresentationalComponent;

const styles = StyleSheet.create({
  myState: {
    marginTop: 20,
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

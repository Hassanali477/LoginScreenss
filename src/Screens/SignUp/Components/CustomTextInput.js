import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const width = Dimensions.get('screen').width;
import React from 'react';

const CustomTextInput = ({
  containerStyle,
  showIcon,
  iconName,
  placeholder,
  value,
  textInputstyle,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <View style={[styles.mainContainer, containerStyle]}>
      {showIcon && <Ionicons name={iconName} size={24} color="black" />}
      <TextInput
        style={[styles.textInputContainer, textInputstyle]}
        placeholder={placeholder}
        value={value}
        placeholderTextColor={'#bbb'}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  mainContainer: {
    height: 65,
    width: width - 40,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textInputContainer: {
    width: '85%',
    color: 'black',
  },
});

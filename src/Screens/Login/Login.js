import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  NativeModules,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomTextInput from '../SignUp/Components/CustomTextInput';

const {
  StatusBarManager: {HEIGHT},
} = NativeModules;
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height - HEIGHT;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handlePress = () => {
    this.props.navigation.navigate('SignUp');
  };
  onChangeText = text => {
    console.log(text);
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
          <AntDesign
            name="arrowleft"
            size={30}
            color="black"
            onPress={this.handlePress}
            style={{position: 'absolute', left: 0, top: 45, zIndex: 200}}
          />
          <Text style={styles.headerText}>Let's Get Started!</Text>
          <Text style={styles.subText}>
            Create an account to Q Allure to get all features
          </Text>
          <CustomTextInput
            showIcon={true}
            iconName={'person-outline'}
            containerStyle={{
              marginTop: 20,
              borderWidth: 2,
              borderColor: '#3ca4e6',
            }}
            placeholder={'Jhone Williams'}
            onChangeText={text => this.onChangeText(text)}
          />
          <CustomTextInput
            showIcon={true}
            iconName={'mail-outline'}
            containerStyle={{
              marginTop: 20,
            }}
            placeholder={'Email'}
            onChangeText={text => this.onChangeText(text)}
          />
          <CustomTextInput
            showIcon={true}
            iconName={'phone-portrait-outline'}
            containerStyle={{
              marginTop: 20,
            }}
            placeholder={'Phone'}
            onChangeText={text => this.onChangeText(text)}
          />
          <CustomTextInput
            showIcon={true}
            iconName={'lock-open-outline'}
            containerStyle={{
              marginTop: 20,
            }}
            placeholder={'Password'}
            onChangeText={text => this.onChangeText(text)}
          />
          <CustomTextInput
            showIcon={true}
            iconName={'lock-open-outline'}
            containerStyle={{
              marginTop: 20,
            }}
            placeholder={'Confirm Password'}
            onChangeText={text => this.onChangeText(text)}
          />
          <TouchableOpacity style={styles.facebookButton}>
            <Text style={styles.facebookButtonText}>CREATE</Text>
          </TouchableOpacity>
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Don't have an account?</Text>
            <TouchableOpacity
              style={styles.signInButton}
              onPress={() => this.handlePress()}>
              <Text style={styles.signInText}>Login here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  subContainer: {
    width: width - 40,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'black',
    fontWeight: '800',
    fontSize: 25,
    marginBottom: 10,
  },
  subText: {
    color: '#bbb',
    marginBottom: 20,
  },
  facebookButton: {
    color: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 200,
    alignSelf: 'center',
    borderRadius: 30,
    backgroundColor: '#0666FF',
    marginTop: 40,
    flexDirection: 'row',
  },
  facebookButtonText: {
    marginLeft: 10,
    color: 'white',
    fontSize: 17,
    fontWeight: '800',
    letterSpacing: 1,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerText: {
    color: 'black',
    marginTop: 35,
    fontSize: 16,
    marginRight: 5,
  },
  signInText: {
    color: '#2d7aed',
    fontSize: 16,
    marginTop: 35,
    fontWeight: '800',
  },
});

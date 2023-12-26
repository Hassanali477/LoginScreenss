import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  NativeModules,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
const {
  StatusBarManager: {HEIGHT},
} = NativeModules;
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height - HEIGHT;
import CustomTextInput from './Components/CustomTextInput';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }
  handleInputChange = text => {
    this.setState({inputValue: text});
  };
  handleSubmit = () => {
    console.log('Input value', this.state.inputValue);
  };
  loginButton = text1 => {
    console.warn('Login successfully');
  };
  handlePress = () => {
    this.props.navigation.navigate('Login');
  };
  onChangeText = text => {
    console.log('This is the value', text);
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
          <Image
            source={require('../../Assets/Images/SignUpImg.jpg')}
            style={{width: 200, height: 200}}
          />
          <Text style={styles.heading}>Welcome back!</Text>
          <Text style={styles.paragraph}>
            Log in to your existant account of Q Allure
          </Text>

          <CustomTextInput
            showIcon={true}
            iconName={'person-outline'}
            containerStyle={{
              marginTop: 20,
              borderWidth: 2,
              borderColor: '#3ca4e6',
            }}
            placeholder={'Username'}
            onChangeText={text => this.onChangeText(text)}
          />
          <CustomTextInput
            showIcon={true}
            iconName={'lock-open-outline'}
            containerStyle={{
              marginTop: 20,
            }}
            placeholder={'Password'}
            secureTextEntry={true}
          />
          <Text style={styles.forgetPassword}>Forget Password?</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={text1 => this.loginButton(text1)}>
            <Text style={styles.loginBtnText}>LOG IN</Text>
          </TouchableOpacity>
          <Text style={styles.textConnect}>Cr connect using</Text>
          <View style={styles.socialButton}>
            <TouchableOpacity style={styles.facebookButton}>
              <Ionicons name="logo-facebook" size={24} color="white" />
              <Text style={styles.facebookButtonText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.googleButtonText}>
              <Ionicons name="logo-google" size={24} color="white" />
              <Text style={styles.googleText}>Google</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Don't have an account?</Text>
            <TouchableOpacity
              style={styles.signInButton}
              onPress={() => this.handlePress()}>
              <Text style={styles.signInText}>Sign up</Text>
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
  heading: {
    color: 'black',
    fontSize: 25,
    fontWeight: '900',
    marginBottom: 10,
  },
  paragraph: {
    color: 'grey',
  },
  forgetPassword: {
    color: 'black',
    alignSelf: 'flex-end',
    marginTop: 10,
  },

  button: {
    color: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 210,
    alignSelf: 'center',
    borderRadius: 30,
    backgroundColor: '#0666FF',
    marginTop: 15,
  },
  loginBtnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
  },
  textConnect: {
    color: '#bbb',
    marginTop: 25,
    fontSize: 15,
  },
  socialButton: {
    flexDirection: 'row',
  },
  facebookButton: {
    color: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 150,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#0666FF',
    marginTop: 15,
    flexDirection: 'row',
  },
  facebookButtonText: {
    marginLeft: 10,
    color: 'white',
    fontSize: 17,
  },

  googleButtonText: {
    color: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 150,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: 'red',
    marginTop: 15,
    flexDirection: 'row',
    marginLeft: 15,
  },
  googleText: {
    marginLeft: 10,
    color: 'white',
    fontSize: 17,
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
    color: '#0666FF',
    fontSize: 16,
    marginTop: 35,
    fontWeight: '800',
  },
});

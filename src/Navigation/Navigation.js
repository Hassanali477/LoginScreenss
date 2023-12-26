import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreens from '../Screens/splashScreen/SplashScreens';
import SignUp from '../Screens/SignUp/SignUp';
import Login from '../Screens/Login/Login';
import Practice from '../Screens/Practice';
import Home from '../Screens/Home';
import Inputs from '../Screens/Inputs';

const Stack = createNativeStackNavigator();
export class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isSplashVisible: true,
    };
  }
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({isSplashVisible: true}); // Hide the splash screen after the delay
  //   }, 3000); // Change 3000 to your desired duration for the splash screen
  // }

  render() {
    // const {isSplashVisible} = this.state;
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SplashScreens" component={SplashScreens} />

          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Practice" component={Practice} />
          <Stack.Screen name="Inputs" component={Inputs} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigation;

import React, {useEffect} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  useColorScheme,
  Dimensions,
  NativeModules,
  Image,
} from 'react-native';
const {
  StatusBarManager: {HEIGHT},
} = NativeModules;
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height - HEIGHT;
function SplashScreens(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('SignUp');
    }, 2000);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../../Assets/Images/papa.png')}
        style={{width: 350, height: 350}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default SplashScreens;

import React, { Component } from 'react';
import {  AppRegistry,View ,Text} from 'react-native';
import {Login} from './src/components/pages/login';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { Startup } from './src/components/pages/startup';
import {FBLoginButton} from './src/components/pages/fbloginbutton';
import {BarcodeScanner} from './src/components/pages/barcodescanner';

export  class App extends Component {
 
  render() {
    return (
      // <Login />      
      <View >
      <Text >  Sign in </Text>
    </View>

    );
  }
}

const AppNavigator = createStackNavigator({
  Login: {screen: Login},
  Startup: {screen: Startup},
  FBLoginButton:{screen:FBLoginButton},
  BarcodeScanner:{screen:BarcodeScanner}
});

createAppContainer(AppNavigator);
export default createAppContainer(AppNavigator);

AppRegistry.registerComponent('App', () => App);
 
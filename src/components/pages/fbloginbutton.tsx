import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import {Startup} from './startup';

export class FBLoginButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    //   const { navigate } = this.props.navigation;
        return (
          <View>
            <LoginButton
              publishPermissions={["email"]}
              onLoginFinished={
                (error, result) => {
                  if (error) {
                    alert("Login failed with error: " + error.message);                    
                    return <Startup />
                  } else if (result.isCancelled) {
                    alert("Login was cancelled");
                    //return  <Startup />
                  } else {
                    alert("Login was successful with permissions: " + result.grantedPermissions)
                    //return <Startup />
                  }
                }
              }
              onLogoutFinished={() => alert("User logged out")}/>
          </View>
        );
      }
};


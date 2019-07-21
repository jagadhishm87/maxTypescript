import React, { Component } from 'react';
import {
  Alert, TextInput, Text, View, StyleSheet,
  ScrollView
} from 'react-native';
import { Container } from './container';
import { Button } from './button';
import { Label } from './label';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {FBLoginButton} from './fbloginbutton';

export class Login extends Component {

  constructor(props) {
    super(props);
    const { navigate } = this.props.navigation;
    this.state = {
      username: '',
      password: '',
    };
  }

  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }

  // press() {
  //   this.navigate('Startup');
  // }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.scroll}>
        <Container>
          {/* <Button
            label="Forgot Login/Pass"
            styles={{ button: styles.alignRight, label: styles.label }}
            onPress={this.press.bind(this)} /> */}
          <View style={styles.inline}>

            <Text style={[styles.buttonBlueText, styles.buttonBigText]}>  Sign in </Text>
          </View>

        </Container>
        <Container>
          <Label text="Username or Email" />
          <TextInput
            style={styles.textInput}
          />
        </Container>
        <Container>
          <Label text="Password" />
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
          />
        </Container>

        <Container>
          <Button
            label="Sign In"
            styles={{ button: styles.primaryButton, label: styles.buttonWhiteText }}
            onPress={() => navigate('Startup')} />
        </Container>
        <View style={styles.footer}>
          {/* <Container>
            <Button
              styles={{ button: styles.transparentButton }}
              onPress={() => navigate('Startup')}
            >
              <View style={styles.inline}>

                <Text style={[styles.buttonBlueText, styles.buttonBigText]}>  Connect </Text>
                <Text style={styles.buttonBlueText}>with Facebook</Text>
              </View>
            </Button>
          </Container> */}
          <Container>
          <View style={styles.container}>
          <Text style={[styles.buttonBlueText, styles.buttonBigText]}>  Connect </Text>
                <Text style={styles.buttonBlueText}>with Facebook</Text>
        <FBLoginButton />
      </View>
          </Container>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#E1D7D8',
    padding: 30,
    flexDirection: 'column'
  }, label: {
    color: '#0d8898',
    fontSize: 20
  },
  alignRight: {
    alignSelf: 'flex-end'
  }, textInput: {
    height: 80,
    fontSize: 30,
    backgroundColor: '#FFF'
  }, transparentButton: {
    marginTop: 30,
    borderColor: '#3B5699',
    borderWidth: 2
  },
  buttonBlueText: {
    fontSize: 20,
    color: '#3B5699'
  },
  buttonBigText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  inline: {
    flexDirection: 'row'
  }, buttonWhiteText: {
    fontSize: 20,
    color: '#FFF',
  },
  buttonBlackText: {
    fontSize: 20,
    color: '#595856'
  },
  primaryButton: {
    backgroundColor: '#34A853'
  },
  footer: {
    marginTop: 100
  },container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

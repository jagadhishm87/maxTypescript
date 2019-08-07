import React, { Component } from 'react';
import {
  Alert, TextInput, Text, View, StyleSheet,Picker,
  ScrollView
} from 'react-native';
import { Container } from './container';
import { Button } from './button';
import { Label } from './label';

export class Startup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: '',
      mobileNo: '',
    };
  }

  onNext() {
    const { language, mobileNo } = this.state;
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.scroll}>
        <Container>
          <View style={styles.inline}>
            <Text style={[styles.buttonBlueText, styles.buttonBigText]}>  Let's Get Started </Text>
          </View>
        </Container>
        <Container>
        <Picker
  selectedValue={this.state.language}
  style={styles.picker}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue})
  }>
  <Picker.Item label="ENGLISH" value="ENGLISH" />
  <Picker.Item label="ENGLISH" value="HINDI" />
</Picker>
        </Container>
        <Container>
          <Label text="Mobile Number" />
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
          />
        </Container>

        <Container>
          <Button
            label="Next"
            styles={{ button: styles.primaryButton, label: styles.buttonWhiteText }}
            onPress={this.onNext.bind(this)} />
        </Container>

        <Container>
          <Button
            label="Read Barcode"
            styles={{ button: styles.primaryButton, label: styles.buttonWhiteText }}
            onPress={() => navigate('BarcodeScanner')} />
        </Container>

        <Container>
          <Button
            label="Speak"
            styles={{ button: styles.primaryButton, label: styles.buttonWhiteText }}
            onPress={() => navigate('VoiceNative')} />
        </Container>
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
  },
  picker: {
    height: 80,
    fontSize: 30,
    backgroundColor: '#FFF'
  }
});

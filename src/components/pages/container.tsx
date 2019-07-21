import React, { Component } from 'react';
 
import {  StyleSheet,  View} from 'react-native';

export  class Container extends Component {
    constructor(props) {
        super(props);     
      }

      render() {
        return ( <View style={styles.labelContainer}>
            { this.props.children }
        </View> );
      }
}
 
const styles = StyleSheet.create({
    labelContainer: {
        marginBottom: 20
    }
});
 
 
 

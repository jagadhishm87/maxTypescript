import React, { Component } from 'react';

import { StyleSheet, View, Text } from 'react-native';

export class Label extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Text
            style={this.props.styles && this.props.styles.textLabel ? this.props.styles.textLabel : styles.textLabel}
        >
            {this.props.text}
        </Text>);
    }
}

const styles = StyleSheet.create({
    textLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Verdana',
        marginBottom: 10,
        color: '#595856'
    }
});




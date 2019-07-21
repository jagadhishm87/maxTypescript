import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    TouchableHighlight,
} from 'react-native';

export   class Button extends Component {

    getContent() {
        if (this.props.children) {
            return this.props.children;
        }
        return <Text style={this.props.styles.label}>{this.props.label}</Text>
    }
    render() {
        return (
            <TouchableHighlight
                underlayColor="#ccc"
                onPress={this.props.onPress}
                style={[
                    this.props.noDefaultStyles ? '' : styles.button,
                    this.props.styles ? this.props.styles.button : '']}
            >
                {this.getContent()}
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
});


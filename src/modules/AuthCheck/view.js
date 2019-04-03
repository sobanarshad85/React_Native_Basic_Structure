//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './style'
import color from '../../../config/res'

// create a component
class AuthCheckScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>AuthCheckScreen</Text>
            </View>
        );
    }
}

//make this component available to the app
export default AuthCheckScreen;

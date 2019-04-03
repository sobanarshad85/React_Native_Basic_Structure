//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
class onescreen extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text>onescreen</Text>
                <Image source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} style={{height:24,width:24}} />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default onescreen;

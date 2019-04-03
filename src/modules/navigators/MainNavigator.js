import { createStackNavigator, createAppContainer, DrawerItems, SafeAreaView, createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import AuthCheckScreen from '../AuthCheck/view'
import LoginScreen from '../LoginScreen/view'
import onescreen from '../../../one'
import twoscreen from '../../../two'
import threescreen from '../../../threescreen'
import { ScrollView, Text, View, TouchableOpacity, Image } from "react-native";
import React, { Component } from 'react';

const checn = createBottomTabNavigator({
    onescreen: { screen: onescreen },
    threescreen: { screen: threescreen }
},  {
    tabBarOptions: {
        showLabel: true,
        showIcon: false,
        activeTintColor: 'red',
        tabStyle:{
        justifyContent:'center'
          
        }
    }
})

const CustomDrawerContentComponent = props => (

    <SafeAreaView style={{ flex: 1, flexDirection: 'column', borderWidth: 1, height: '100%' }} >
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',marginTop:5 }}>
            <Image source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} style={{ borderRadius: 75, height: 150, width: 150 }} />
        </View>
        <DrawerItems {...props} />

        <View style={{ flexDirection: 'row' }}>
            <Image source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} style={{ borderRadius: 100, height: 24, width: 24 }} />
            <TouchableOpacity onPress={() => { props.navigation.navigate('threescreen') }}><Text >threescreen</Text></TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => { props.navigation.navigate('onescreen') }}><Text >onescreen</Text></TouchableOpacity>


    </SafeAreaView>

);

const MainNavigator = createDrawerNavigator({
    onescreen: { screen: checn },
    twoscreen: { screen: twoscreen }
},
    {
        initialRouteName: 'onescreen',
        contentComponent: CustomDrawerContentComponent,
        drawerPosition: 'right'
    });

const App = createAppContainer(MainNavigator);


export default App;

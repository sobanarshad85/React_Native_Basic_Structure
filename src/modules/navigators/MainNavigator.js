import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthCheckScreen from '../AuthCheck/view'
import LoginScreen from '../LoginScreen/view'

const MainNavigator = createSwitchNavigator({
    AuthCheckScreen: { screen: AuthCheckScreen },
    LoginScreen: { screen: LoginScreen }
},
{
    initialRouteName:'AuthCheckScreen'
});

const App = createAppContainer(MainNavigator);

export default App;
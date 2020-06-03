import { createStackNavigator, createAppContainer } from 'react-navigation';

import CounterScreen from './src/screens/CounterScreen';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';

const navigator = createStackNavigator(
    {
        Counter: CounterScreen,
        Home: HomeScreen,
        List: ListScreen,
        Image: ImageScreen
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
        title: 'Aplication'
        }
    }
);

export default createAppContainer(navigator);

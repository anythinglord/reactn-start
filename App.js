import { createStackNavigator, createAppContainer } from 'react-navigation';

import ColorScreen from './src/screens/ColorScreen'
import CounterScreen from './src/screens/CounterScreen';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import SquareScreen from './src/screens/SquareScreen'

const navigator = createStackNavigator(
    {
        Color: ColorScreen,
        Counter: CounterScreen,
        Home: HomeScreen,
        List: ListScreen,
        Image: ImageScreen,
        Square: SquareScreen
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
        title: 'Aplication'
        }
    }
);

export default createAppContainer(navigator);

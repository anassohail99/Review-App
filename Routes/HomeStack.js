import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../Screens/Home/Home';
import Reviews from '../Screens/Reviews/Reviews';

const screens = {
  Home: {
    screen: Home,
  },
  Reviews: {
    screen: Reviews,
  },
};

// used to create a new stack navigator
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

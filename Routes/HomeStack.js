import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../Screens/Home/Home';
import Reviews from '../Screens/Reviews/Reviews';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'GameZone',
      textAlign: 'center',
    },
  },
  Reviews: {
    screen: Reviews,
    navigationOptions: {
      title: 'Review Details',
    },
  },
};

// used to create a new stack navigator
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#b43166',
    },
  },
});

export default createAppContainer(HomeStack);

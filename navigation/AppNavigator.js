import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import Tutors from '../components/Tutors';
import Homepage from '../components/Homepage';
import BottomNav from '../components/BottomNav'

// export default createAppContainer(createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator,
//   // Tutors:Tutors,
// }));

const RootStack  = createStackNavigator (
  {
    Tutors:Tutors,
    Homepage:Homepage,
    Main:MainTabNavigator,
    BottomNav:BottomNav,

  }
  // ,
  // {
  //   initialRouteName: 'Homepage',
  //   headerMode: 'none'
  // }
)

export default AppNavigator = createAppContainer(RootStack)
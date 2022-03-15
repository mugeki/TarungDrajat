import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import HomeScreen from '../screens/HomeScreen';
import VideoStack from './VideoStack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function BottomNavbar() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen
        name="Beranda"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({color}) => (
            <Ionicons name="home" color={color} size={25} />
          ),
          headerShown: false,
        }}
      /> */}
      <Tab.Screen
        name="Materi"
        component={VideoStack}
        options={({route}) => {
          const routeName =
            getFocusedRouteNameFromRoute(route) ?? 'VideoSearch';
          return {
            tabBarLabel: 'Materi',
            tabBarIcon: ({color}) => (
              <Ionicons name="videocam" color={color} size={25} />
            ),
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarIconStyle: {margin: 0},
            tabBarStyle:
              routeName === 'VideoFullScreen' ? {display: 'none'} : {},
          };
        }}
      />
    </Tab.Navigator>
  );
}

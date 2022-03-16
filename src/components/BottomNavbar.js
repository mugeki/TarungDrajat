import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import HomeScreen from '../screens/HomeScreen';
import VideoStack from './VideoStack';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

export default function BottomNavbar() {
  const fullscreen = useSelector(state => state.fullscreen);
  useEffect(() => {
    console.log('fullscreen?', fullscreen);
  }, [fullscreen]);
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
        options={{
          tabBarLabel: 'Materi',
          tabBarIcon: ({color}) => (
            <Ionicons name="videocam" color={color} size={25} />
          ),
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarIconStyle: {margin: 0},
          tabBarStyle: fullscreen ? {display: 'none'} : {},
        }}
      />
    </Tab.Navigator>
  );
}

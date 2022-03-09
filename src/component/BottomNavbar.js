import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../HomeScreen';
import VideoSearchScreen from '../VideoSearchScreen';
import VideoScreen from '../VideoScreen';

const Tab = createBottomTabNavigator();

export default function BottomNavbar() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Beranda"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({color}) => (
            <Ionicons name="home" color={color} size={25} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Materi"
        component={VideoScreen}
        options={{
          tabBarLabel: 'Materi',
          tabBarIcon: ({color}) => (
            <Ionicons name="videocam" color={color} size={25} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

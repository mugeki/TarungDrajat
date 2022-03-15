import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MateriDetailScreen from '../screens/MateriDetailScreen';
import MateriScreen from '../screens/MateriScreen';
import VideoFullScreen from '../screens/VideoFullScreen';

const Stack = createNativeStackNavigator();

export default function VideoStack() {
  return (
    <Stack.Navigator initialRouteName="VideoSearch">
      <Stack.Screen
        name="VideoSearch"
        component={MateriScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VideoDetail"
        component={MateriDetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VideoFullScreen"
        component={VideoFullScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

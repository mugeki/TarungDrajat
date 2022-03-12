import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VideoDetailScreen from './VideoDetailScreen';
import VideoSearchScreen from './VideoSearchScreen';
import VideoFullScreen from './VideoFullScreen';

const Stack = createNativeStackNavigator();

export default function VideoScreen() {
  return (
    <Stack.Navigator initialRouteName="VideoSearch">
      <Stack.Screen
        name="VideoSearch"
        component={VideoSearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VideoDetail"
        component={VideoDetailScreen}
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

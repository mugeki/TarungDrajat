import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MateriDetailScreen from '../screens/MateriDetailScreen';
import MateriScreen from '../screens/MateriScreen';

const Stack = createNativeStackNavigator();

export default function VideoStack() {
  return (
    <Stack.Navigator initialRouteName="MateriSearch">
      <Stack.Screen
        name="MateriSearch"
        component={MateriScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MateriDetail"
        component={MateriDetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

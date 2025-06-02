import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

function PlaceholderScreen({ name }: { name: string }) {
  return (
    <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{name} Screen</Text>
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" children={() => <PlaceholderScreen name="Home" />} />
      <Tab.Screen name="Profile" children={() => <PlaceholderScreen name="Profile" />} />
    </Tab.Navigator>
  );
}
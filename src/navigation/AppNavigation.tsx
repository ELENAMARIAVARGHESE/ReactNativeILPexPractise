import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Trainees from '../screens/Trainees';
import Assessment from '../screens/Assessment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

function BottomNav() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarActiveTintColor: "#8518FF",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: styles.label,
      }}
    >

      <Tab.Screen
        name="Trainees"
        component={Trainees}
        options={{
          tabBarLabel: 'Trainees',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-outline" size={30} color={color} />
          ),

        }}
      />
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Batches',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-group-outline" size={30} color={color} />
          ),

        }}
      />
      <Tab.Screen
        name="Assessment"
        component={Assessment}
        options={{
          tabBarLabel: 'Assessment',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="note-plus" size={30} color={color} />
          ),

        }}
      />

    </Tab.Navigator>
  );
}

const StackNav = createNativeStackNavigator();
export function HomeStackNavigation() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="Home"
        component={BottomNav}
        options={{ headerShown: false, }} />
    </StackNav.Navigator>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 17,
    fontWeight:"500"
  },
});
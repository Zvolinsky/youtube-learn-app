import React from 'react';
import { Tabs } from 'expo-router';
import { colors } from '@/tokens/colors';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: colors.secondary, height: 80 },
        tabBarLabelStyle: { fontSize: 17 },
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.primary,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Ionicons name="home" size={25} color={focused ? colors.accent : colors.primary} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => (
            <Ionicons name="search" size={25} color={focused ? colors.accent : colors.primary} />
          ),
        }}
      />
    </Tabs>
  );
}

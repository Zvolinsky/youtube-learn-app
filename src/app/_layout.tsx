import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import './global.css';

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#1e1e1e' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <StatusBar style="light" />
    </>
  );
}

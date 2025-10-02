import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './global.css';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView className="flex-1">
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="login" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="video/[id]" />
        </Stack>
      </SafeAreaView>
    </QueryClientProvider>
  );
}

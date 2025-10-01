import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './global.css';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView className="flex-1">
        <Stack>
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="video/[id]" options={{ presentation: 'modal' }} />
        </Stack>
      </SafeAreaView>
    </QueryClientProvider>
  );
}

import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center bg-slate-500">
      <Text className="text-red-500">Let it go! 🚀</Text>
      <TouchableOpacity
        onPress={() => router.push('/(tabs)')}
        className="mt-4 px-4 py-2 bg-blue-500 rounded"
      >
        <Text>Go next</Text>
      </TouchableOpacity>
    </View>
  );
}

import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-500">Let it go back! 🚀</Text>
      <TouchableOpacity
        onPress={() => router.push('/video/123')}
        className="mt-4 px-4 py-2 bg-blue-500 rounded"
      >
        <Text>Go to see the video</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.back()}
        className="mt-4 px-4 py-2 bg-blue-500 rounded"
      >
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
}

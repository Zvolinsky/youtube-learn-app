import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function VideoScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-500">Number: {id}</Text>
      <TouchableOpacity
        onPress={() => router.back()}
        className="mt-4 px-4 py-2 bg-blue-500 rounded"
      >
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
}

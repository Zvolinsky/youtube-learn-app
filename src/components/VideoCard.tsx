import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Video } from '@/types/types';
import { router } from 'expo-router';

interface Props {
  video: Video;
}

const VideoCard: React.FC<Props> = ({ video }) => (
  <TouchableOpacity
    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4 flex-row items-center"
    onPress={() => router.push(`/video/${video.id}`)}
    accessibilityLabel={`Odtwórz wideo: ${video.title}`}
  >
    <Image
      source={{ uri: video.thumbnail }}
      className="w-24 h-16 rounded-md mr-4"
      accessibilityLabel="Miniatura wideo"
    />
    <View className="flex-1">
      <Text className="text-sm text-gray-500 dark:text-gray-400 mb-1">
        {video.channelTitle || 'Nieznany kanał'}
      </Text>
      <Text className="text-base font-semibold text-black dark:text-white mb-1" numberOfLines={2}>
        {video.title}
      </Text>
      <Text className="text-xs text-gray-400 dark:text-gray-500 self-end">
        {new Date(video.publishedAt).toLocaleDateString()}
      </Text>
    </View>
  </TouchableOpacity>
);

export default VideoCard;

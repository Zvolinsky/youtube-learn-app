import { useYouTubeVideoDetails } from '@/api/youtube';
import TopTabNavigator from '@/components/TabNavigator';
import { useLocalSearchParams } from 'expo-router';
import { useVideoPlayer, VideoView } from 'expo-video';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';

const videoSource = 'https://bitmovin-a.akamaihd.net/content/sintel/hls/playlist.m3u8';

export default function VideoPlayerScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isLoading, error } = useYouTubeVideoDetails(id);
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  if (isLoading) return <Text className="text-center mt-10">Loading video details...</Text>;
  if (error || !data)
    return <Text className="text-center mt-10 text-red-500">Error loading video</Text>;

  const renderDetails = () => (
    <View className="p-4">
      <Text className="text-base mb-4">{data.description}</Text>
      <Text>Wyświetlenia: {data.viewCount.toLocaleString()}</Text>
      <Text>Polubienia: {data.likeCount.toLocaleString()}</Text>
    </View>
  );

  const renderNotes = () => (
    <View className="p-4">
      <Text>Póki co puste</Text>
    </View>
  );

  return (
    <ScrollView
      className="flex-1"
      contentContainerStyle={{ flexGrow: 1 }}
      nestedScrollEnabled={false}
    >
      <View className=" flex-1 bg-white">
        <View className=" bg-black">
          <VideoView style={styles.video} player={player} allowsFullscreen contentFit="contain" />
        </View>

        <Text className="text-xl font-bold px-4 py-2 text-primary">{data.title}</Text>
        <Text className="text-base px-4 text-primary">{data.channelTitle}</Text>

        <TopTabNavigator renderDetails={renderDetails} renderNotes={renderNotes} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  video: {
    height: 400,
  },
});

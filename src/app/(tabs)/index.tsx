import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Divider, Searchbar } from 'react-native-paper';
import { useQuery } from '@tanstack/react-query';
import VideoItem from '../../components/VideoItem';
import { Video, SectionData, YouTubeSearchItem, YouTubeSearchResponse } from '@/types/types';
import colors from '@/tokens/colors';
import Constants from 'expo-constants';

const fetchVideosByTopic = async (topic: string): Promise<Video[]> => {
  const apiKey = Constants.expoConfig?.extra?.youtubeApiKey;
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${topic}&type=video&key=${apiKey}`,
  );
  const data: YouTubeSearchResponse = await response.json();
  return data.items.map((item: YouTubeSearchItem) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.default.url,
    description: item.snippet.description,
  }));
};

export default function HomeScreen() {
  const rnQuery = useQuery<Video[]>({
    queryKey: ['videos', 'React Native'],
    queryFn: () => fetchVideosByTopic('React Native tutorial'),
    staleTime: 1000 * 60 * 60,
  });
  const reactQuery = useQuery<Video[]>({
    queryKey: ['videos', 'React'],
    queryFn: () => fetchVideosByTopic('React tutorial'),
    staleTime: 1000 * 60 * 60,
  });
  const tsQuery = useQuery<Video[]>({
    queryKey: ['videos', 'TypeScript'],
    queryFn: () => fetchVideosByTopic('TypeScript tutorial'),
    staleTime: 1000 * 60 * 60,
  });

  const sections: SectionData[] = [
    { title: 'React Native', data: rnQuery.data ?? [] },
    { title: 'React', data: reactQuery.data ?? [] },
    { title: 'TypeScript', data: tsQuery.data ?? [] },
  ];

  return (
    <View className="flex-1 bg-white p-4 gap-8">
      <View className="flex-row items-center p-2">
        <Searchbar
          placeholder="Search videos"
          value={''}
          style={{
            flex: 1,
            marginRight: 10,
            backgroundColor: colors.accent,
            borderColor: colors.primary,
            borderWidth: 2,
            borderRadius: 20,
          }}
        />
        <TouchableOpacity onPress={() => {}} accessibilityLabel="Settings">
          <Ionicons name="settings-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {sections.map((section, index) => (
          <View key={section.title} className="mb-7">
            <Text className="font-bold text-2xl px-3 mb-2 text-primary">{section.title}</Text>

            <FlatList
              data={section.data}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {}}>
                  <VideoItem video={item} />
                </TouchableOpacity>
              )}
            />
            {index < sections.length - 1 && <Divider bold />}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

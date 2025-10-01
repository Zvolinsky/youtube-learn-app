import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Divider, Searchbar } from 'react-native-paper';
import VideoItem from '../../components/VideoItem';
import { SectionData } from '@/types/types';
import { colors } from '@/tokens/colors';
import { useYouTubeVideos } from '@/api/youtube';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  const rnVideos = useYouTubeVideos('React Native', 'relevance');
  const reactVideos = useYouTubeVideos('React', 'relevance');
  const tsVideos = useYouTubeVideos('TypeScript', 'relevance');

  const sections: SectionData[] = [
    { title: 'React Native', data: rnVideos.data?.videos ?? [] },
    { title: 'React', data: reactVideos.data?.videos ?? [] },
    { title: 'TypeScript', data: tsVideos.data?.videos ?? [] },
  ];

  if (rnVideos.isLoading || reactVideos.isLoading || tsVideos.isLoading)
    return <Text>Loading...</Text>;
  if (rnVideos.error || reactVideos.error || tsVideos.error)
    return <Text>Error loading videos</Text>;

  const handleShowMore = (query: string) => {
    router.push(`/search?query=${encodeURIComponent(query)}`);
  };

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
            <View className="flex-row justify-between items-baseline">
              <Text className="font-bold text-2xl px-3 mb-2 text-primary">{section.title}</Text>
              <Text
                className="underline text-md px-3 mb-2 text-primary"
                onPress={() => handleShowMore(section.title)}
              >
                Show more
              </Text>
            </View>
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

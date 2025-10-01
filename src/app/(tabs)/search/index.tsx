import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { useYouTubeVideos } from '@/api/youtube';
import VideoCard from '@/components/VideoCard';
import { colors } from '@/tokens/colors';
import { useLocalSearchParams } from 'expo-router/build/hooks';

export default function SearchScreen() {
  const { query: initialQuery = '' } = useLocalSearchParams();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOption, setSortOption] = useState('relevance');
  const setQuery = (text: string) => setSearchQuery(text);

  const { data, isLoading, error } = useYouTubeVideos(searchQuery, sortOption);

  const videos = data?.videos || [];
  const totalResults = data?.totalResults || 0;

  const getSortLabel = () => {
    switch (sortOption) {
      case 'date':
        return 'Data wysłania: najnowsze';
      case 'date-asc':
        return 'Data wysłania: najstarsze'; // Custom: reverse client-side
      case 'viewCount':
        return 'Najpopularniejsze';
      default:
        return 'Relevance';
    }
  };
  useEffect(() => {
    setSearchQuery(initialQuery as string);
  }, [initialQuery]);

  const handleOpenModal = () => {};

  return (
    <View className="flex-1 bg-white dark:bg-gray-900 px-4 pt-4">
      <View className="flex-row items-center p-2">
        <Searchbar
          placeholder="Search videos"
          value={searchQuery}
          onChangeText={setQuery}
          style={{
            flex: 1,
            marginRight: 10,
            backgroundColor: colors.accent,
            borderColor: colors.primary,
            borderWidth: 2,
            borderRadius: 20,
          }}
        />
      </View>

      <View className="flex-row justify-between mb-4">
        <Text className="text-sm text-gray-700 dark:text-gray-300">
          {totalResults} results found for: {searchQuery}
        </Text>
        <TouchableOpacity onPress={handleOpenModal} accessibilityLabel="Otwórz opcje sortowania">
          <Text className="text-sm text-blue-500">Sort by {getSortLabel()}</Text>
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <Text className="text-center">Loading...</Text>
      ) : error ? (
        <Text className="text-center text-red-500">Error: {error.message}</Text>
      ) : videos.length === 0 ? (
        <Text className="text-center">No results</Text>
      ) : (
        <FlatList
          data={videos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <VideoCard video={item} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

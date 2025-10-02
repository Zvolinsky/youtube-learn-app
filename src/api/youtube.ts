import { useQuery } from '@tanstack/react-query';
import Constants from 'expo-constants';
import { YouTubeSearchResponse, YouTubeSearchItem, Video, VideoDetails } from '@/types/types';

const apiKey = Constants.expoConfig?.extra?.youtubeApiKey;

const fetchYouTubeVideos = async (
  query: string,
  order: string,
): Promise<{ videos: Video[]; totalResults: number }> => {
  if (!apiKey) throw new Error('YouTube API key not found');

  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=20&order=${order}&key=${apiKey}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }

  const data: YouTubeSearchResponse = await response.json();

  const videos: Video[] = data.items.map((item: YouTubeSearchItem) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    thumbnail: item.snippet.thumbnails.default.url,
    publishedAt: item.snippet.publishedAt,
    channelTitle: item.snippet.channelTitle,
  }));

  return { videos, totalResults: data.pageInfo.totalResults };
};

const fetchYouTubeVideoDetails = async (videoId: string): Promise<VideoDetails> => {
  if (!apiKey) throw new Error('YouTube API key not found');

  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${apiKey}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }

  const data = await response.json();
  const item = data.items[0]; // Pierwszy (i jedyny) item dla pojedynczego id

  if (!item) throw new Error('Video not found');

  return {
    title: item.snippet.title,
    channelTitle: item.snippet.channelTitle,
    description: item.snippet.description,
    viewCount: parseInt(item.statistics.viewCount, 10),
    likeCount: parseInt(item.statistics.likeCount, 10),
  };
};

export const useYouTubeVideos = (query: string, order: string = 'relevance') => {
  return useQuery<{ videos: Video[]; totalResults: number }, Error>({
    queryKey: ['youtubeVideos', query, order],
    queryFn: async () => await fetchYouTubeVideos(query, order),
    staleTime: 1000 * 60 * 5,
  });
};

export const useYouTubeVideoDetails = (videoId: string) => {
  return useQuery<VideoDetails, Error>({
    queryKey: ['youtubeVideoDetails', videoId],
    queryFn: async () => await fetchYouTubeVideoDetails(videoId),
    staleTime: 1000 * 60 * 5,
  });
};

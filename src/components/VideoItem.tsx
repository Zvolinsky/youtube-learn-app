import { View, Text, Image } from 'react-native';
import React from 'react';
import { Video } from '@/types/types';

interface VideoItemProps {
  video: Video;
}

const VideoItem: React.FC<VideoItemProps> = ({ video }) => {
  return (
    <View style={{ width: 150, margin: 10 }}>
      <Image source={{ uri: video.thumbnail }} style={{ width: 150, height: 100 }} />
      <Text numberOfLines={2}>{video.title}</Text>
      <Text className="text-black">{new Date(video.publishedAt).toLocaleDateString()}</Text>
    </View>
  );
};

export default VideoItem;

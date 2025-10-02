import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Video } from '@/types/types';
import { router } from 'expo-router';

interface VideoItemProps {
  video: Video;
}

const VideoItem: React.FC<VideoItemProps> = ({ video }) => {
  return (
    <TouchableOpacity onPress={() => router.push(`/video/${video.id}`)}>
      <View style={{ width: 150, margin: 10 }}>
        <Image source={{ uri: video.thumbnail }} style={{ width: 150, height: 100 }} />
        <Text numberOfLines={2}>{video.title}</Text>
        <Text className="text-black">{new Date(video.publishedAt).toLocaleDateString()}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default VideoItem;

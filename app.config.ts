import { ExpoConfig, ConfigContext } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'youtube-learn-app',
  slug: 'youtube-learn-app',
  version: '1.0.0',
  extra: {
    youtubeApiKey: process.env.YOUTUBE_API_KEY,
  },
});

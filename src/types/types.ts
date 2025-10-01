export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
}

export interface YouTubeSearchItem {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
  };
}

export interface YouTubeSearchResponse {
  items: YouTubeSearchItem[];
}

export interface SectionData {
  title: string;
  data: Video[];
}

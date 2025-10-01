export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  channelTitle?: string;
  publishedAt: string;
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
    publishedAt: string;
    channelTitle: string;
  };
}

export interface YouTubeSearchResponse {
  items: YouTubeSearchItem[];
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

export interface SectionData {
  title: string;
  data: Video[]; // Poprawione: bezpośrednio Video[], bez {videos: Video[]}
}

export type SortOption = 'date' | 'viewCount' | 'relevance';

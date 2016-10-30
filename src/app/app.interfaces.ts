export interface Channel {
  id: string;
  name: string;
  number: number;
}

export interface Stream {
  _id: string;
  channelId: string;
  name: string;
  artists: string[];
  artistsId: string;
  startTime: Date;
  songId: string;
}

export interface Spotify {
  cover: string;
  spotifyId: string;
  name: string;
  duration_ms: number;
  url: string;
  songId: string;
}

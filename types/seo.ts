export interface ITwitterSeoType {
  cardType?: "summary" | "summary_large_image" | "app" | "player";
  site?: string;
}

export interface IOpenGraphSeoType {
  type?:
    | "article"
    | "website"
    | "profile"
    | "video.other"
    | "video.movie"
    | "video.episode"
    | "video.tv_show"
    | "video.other"
    | "book"
    | "music.song"
    | "music.album"
    | "music.playlist"
    | "music.radio_station";
  site_name?: string;
}

export interface ISeoMeta {
  title?: string;
  description?: string;
  image?: string;
  twitter?: ITwitterSeoType;
  openGraph?: IOpenGraphSeoType;
}

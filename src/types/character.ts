export interface thumbnail {
  path: string;
  extension: string;
}

export interface item {
  resourceURI: string;
  name: string;
}

export interface series {
  available: number;
  collectionURI: string;
  items: item[];
  returned: number;
}

export interface stories {
  available: number;
  collectionURI: string;
  items: item[];
  returned: number;
}

export interface events {
  available: number;
  collectionURI: string;
  items: item[];
  returned: number;
}

export interface url {
  type: string;
  url: string;
}

export interface dates {
  type: "string";
  date: "Date";
}

export interface prices {
  type: "string";
  price: "float";
}

export interface comic {
  available: number;
  collectionURI: string;
  items: item[];
  returned: number;
}

export interface iCharacter {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: thumbnail;
  resourceURI: string;
  comics: comic;
  series: series;
  stories: stories;
  events: events;
  urls: url[];
}

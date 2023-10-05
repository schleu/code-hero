interface thumbnail {
  path: string;
  extension: string;
}

interface item {
  resourceURI: string;
  name: string;
}

interface comics {
  available: number;
  collectionURI: string;
  items: item[];
  returned: number;
}

interface series {
  available: number;
  collectionURI: string;
  items: item[];
  returned: number;
}

interface stories {
  available: number;
  collectionURI: string;
  items: item[];
  returned: number;
}

interface events {
  available: number;
  collectionURI: string;
  items: item[];
  returned: number;
}

interface url {
  type: string;
  url: string;
}

export interface iCharacter {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: thumbnail;
  resourceURI: string;
  comics: comics;
  series: series;
  stories: stories;
  events: events;
  urls: url[];
}

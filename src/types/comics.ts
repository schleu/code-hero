import { dates, item, prices, thumbnail, url } from "./character";

export interface iComics {
  code: "number";
  status: "string";
  copyright: "string";
  attributionText: "string";
  attributionHTML: "string";
  data: {
    offset: "number";
    limit: "number";
    total: "number";
    count: "number";
    results: [
      {
        id: "number";
        digitalId: "number";
        title: "string";
        issueNumber: "double";
        variantDescription: "string";
        description: "string";
        modified: "Date";
        isbn: "string";
        upc: "string";
        diamondCode: "string";
        ean: "string";
        issn: "string";
        format: "string";
        pageCount: "number";
        textObjects: [
          {
            type: "string";
            language: "string";
            text: "string";
          }
        ];
        resourceURI: "string";
        urls: url[];
        series: item;
        variants: item[];
        collections: item[];
        collectedIssues: item[];
        dates: dates[];
        prices: prices[];
        thumbnail: thumbnail;
        images: thumbnail[];
        creators: {
          available: "number";
          returned: "number";
          collectionURI: "string";
          items: [
            {
              resourceURI: "string";
              name: "string";
              role: "string";
            }
          ];
        };
        characters: {
          available: "number";
          returned: "number";
          collectionURI: "string";
          items: [
            {
              resourceURI: "string";
              name: "string";
              role: "string";
            }
          ];
        };
        stories: {
          available: "number";
          returned: "number";
          collectionURI: "string";
          items: [
            {
              resourceURI: "string";
              name: "string";
              type: "string";
            }
          ];
        };
        events: {
          available: "number";
          returned: "number";
          collectionURI: "string";
          items: [
            {
              resourceURI: "string";
              name: "string";
            }
          ];
        };
      }
    ];
  };
  etag: "string";
}

export interface comics {
  available: number;
  collectionURI: string;
  items: item[];
  returned: number;
}

interface Character {
  name: string;
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface Date {
  type: string;
  date: string;
}

interface Price {
  price : number;
  type :string
}

interface ComicData {
  data: {
    results: {
      description: string;
      title: string;
      thumbnail: Thumbnail;
      characters: {
        items: Character[];
      };
      dates: Date[];
      prices:Price[]
    }[];
  };
}

export type { Character, Thumbnail, Date, ComicData,Price };
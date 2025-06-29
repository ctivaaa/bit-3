export interface RickOrMortyApi {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
    };
    location: {
      name: string;
    };
    image: string;
  }[];
}


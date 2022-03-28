export interface IMovieItens {
  id: number;
  title: string;
  name: string;
  original_title: string;
  original_name: string;
  original_language: string;
  poster_path: string;
  release_date: string;
  first_air_date: string;
  vote_average: number;
  media_type: string;
  backdrop_path: string;
  genre_ids: Array<number>;
  overview: string;
};

export const API_URL = 'https://api.themoviedb.org/3/';
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const API_END_POINT = {
  search: 'https://api.github.com/search/repositories?q=',
  weak: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=pt-BR`,
  best: 'https://api.github.com/search/repositories?q=',
  must_popularity: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=pt-BR`,
  movie: 'https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US',
}

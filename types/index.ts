export interface LoginForm {
  username: string;
  password: string;
}

// Navbar
export interface Links {
  label: string;
  link: string;
}

export interface Movie {
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  first_air_date?: string;
}

export interface People {
  id: number;
  name: string;
  original_name?: string;
  media_type: string;
  adult: boolean;
  popularity: number;
  gender: number;
  known_for_department: string | null;
  profile_path: string | null;
}

export interface TV {
  backdrop_path: string;
  id: number;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}
export interface APIResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
export interface PeopleResponse {
  page: number;
  results: People[];
  total_pages: number;
  total_results: number;
}
export interface TVResponse {
  page: number;
  results: TV[];
  total_pages: number;
  total_results: number;
}

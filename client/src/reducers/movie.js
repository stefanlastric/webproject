import {
  GET_MOVIES,
  GET_MOVIE,
  MOVIE_ERROR,
  DELETE_MOVIE,
  ADD_MOVIE
} from '../actions/types';
const initialState = {
  movies: [],
  movie: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: payload,
        loading: false
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: payload,
        loading: false
      };
    case ADD_MOVIE:
      return {
        ...state,
        movies: [payload, ...state.movies],
        loading: false
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie._id !== payload),
        loading: false
      };
    case MOVIE_ERROR:
      return {
        ...state,
        movies: payload,
        loading: false
      };
    default:
      return state;
  }
}

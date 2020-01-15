import {
  GET_MOVIES,
  GET_MOVIE,
  MOVIE_ERROR,
  DELETE_MOVIE,
  ADD_MOVIE
} from '../actions/types';
const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case GET_MOVIE:
      return {
        ...state,
        post: payload,
        loading: false
      };
    case ADD_MOVIE:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false
      };
    case DELETE_MOVIE:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== payload),
        loading: false
      };
    case MOVIE_ERROR:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    default:
      return state;
  }
}

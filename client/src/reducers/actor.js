import {
  GET_ACTORS,
  GET_ACTOR,
  ACTOR_ERROR,
  DELETE_ACTOR,
  ADD_ACTOR
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
    case GET_ACTORS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case GET_ACTOR:
      return {
        ...state,
        post: payload,
        loading: false
      };
    case ADD_ACTOR:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false
      };
    case DELETE_ACTOR:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== payload),
        loading: false
      };
    case ACTOR_ERROR:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    default:
      return state;
  }
}

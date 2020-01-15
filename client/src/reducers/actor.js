import {
  GET_ACTORS,
  GET_ACTOR,
  ACTOR_ERROR,
  DELETE_ACTOR,
  ADD_ACTOR
} from '../actions/types';
const initialState = {
  actors: [],
  actor: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ACTORS:
      return {
        ...state,
        actors: payload,
        loading: false
      };
    case GET_ACTOR:
      return {
        ...state,
        actor: payload,
        loading: false
      };
    case ADD_ACTOR:
      return {
        ...state,
        actors: [payload, ...state.actors],
        loading: false
      };

    //fix delete
    case DELETE_ACTOR:
      return {
        ...state,
        actors: state.actors.filter(actor => actor._id !== payload),
        loading: false
      };
    case ACTOR_ERROR:
      return {
        ...state,
        actors: payload,
        loading: false
      };
    default:
      return state;
  }
}

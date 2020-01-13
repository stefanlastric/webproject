import axios from 'axios';
import { setAlert } from './alert';
import { DELETE_MOVIE, DELETE_ACTOR, POST_ERROR } from './types';

export const deleteMovie = id => async dispatch => {
  try {
    await axios.delete(`/movies/${id}`);

    dispatch({
      type: DELETE_MOVIE,
      payload: id
    });

    dispatch(setAlert('Movie Removed', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const deleteActor = id => async dispatch => {
  try {
    await axios.delete(`/actors/${id}`);

    dispatch({
      type: DELETE_ACTOR,
      payload: id
    });

    dispatch(setAlert('Actor Removed', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

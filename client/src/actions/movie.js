import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_MOVIE,
  GET_MOVIES,
  MOVIE_ERROR,
  CLEAR_MOVIE,
  DELETE_MOVIE
} from './types';

//export current user movies
export const getCurrentMovie = () => async dispatch => {
  try {
    const res = await axios.get('/movies/me');

    dispatch({
      type: GET_MOVIE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: MOVIE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get all movies
export const getMovies = () => async dispatch => {
  dispatch({ type: CLEAR_MOVIE });
  try {
    const res = await axios.get('/movies');

    dispatch({
      type: GET_MOVIES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: MOVIE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get movies by ID
export const getMoviesById = userId => async dispatch => {
  try {
    const res = await axios.get(`/movies/user/${userId}`);

    dispatch({
      type: GET_MOVIE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: MOVIE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Create or update movies
export const createMovie = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.post('/movies', formData, config);

    dispatch({
      type: GET_MOVIE,
      payload: res.data
    });

    dispatch(setAlert(edit ? 'Movie Updated' : 'Movie Created', 'success'));

    if (!edit) {
      history.push('/');
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: MOVIE_ERROR,
      payload: { msg: err.response, status: err.response }
    });
  }
};

//Delete movies

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
      type: MOVIE_ERROR,
      payload: { msg: err.response, status: err.response }
    });
  }
};

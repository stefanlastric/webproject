import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_ACTOR,
  GET_ACTORS,
  ACTOR_ERROR,
  CLEAR_ACTOR,
  DELETE_ACTOR
} from './types';

//export current user actors
export const getCurrentActor = () => async dispatch => {
  try {
    const res = await axios.get('/actors/me');

    dispatch({
      type: GET_ACTOR,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ACTOR_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get all actorss
export const getActors = () => async dispatch => {
  dispatch({ type: CLEAR_ACTOR });
  try {
    const res = await axios.get('/actors');

    dispatch({
      type: GET_ACTORS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ACTOR_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get actors by ID
export const getActorsById = userId => async dispatch => {
  try {
    const res = await axios.get(`/actors/user/${userId}`);

    dispatch({
      type: GET_ACTOR,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ACTOR_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Create or update actors
export const createActor = (
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

    const res = await axios.post('/actors', formData, config);

    dispatch({
      type: GET_ACTOR,
      payload: res.data
    });

    dispatch(setAlert(edit ? 'Actor Updated' : 'Actor Created', 'success'));

    if (!edit) {
      history.push('/');
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: ACTOR_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Delete actors

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
      type: ACTOR_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import movie from './movie';
import actor from './actor';

export default combineReducers({
  alert,
  auth,
  movie,
  actor
});

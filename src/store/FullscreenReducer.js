import {combineReducers} from 'redux';

const INITIAL_STATE = false;

const fullscreenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_SCREEN':
      return !state;
    default:
      return state;
  }
};

export default combineReducers({
  fullscreen: fullscreenReducer,
});

import {createStore} from 'redux';
import fullscreenReducer from './FullscreenReducer';

const store = createStore(fullscreenReducer);

export default store;

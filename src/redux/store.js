import {combineReducers, createStore, applyMiddleware} from 'redux';
import {mainReducer} from './mainReducer.js';

let reducers = combineReducers({
	main: mainReducer,
});
let store = createStore(reducers);
window.store = store;
export default store;
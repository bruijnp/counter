import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {counterReducer} from './CounterReducer';

export const reducer = combineReducers({
  counter: counterReducer,
  routing: routerReducer
});

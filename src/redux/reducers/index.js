import {combineReducers} from 'redux';
import { counterReducer } from './counterReducer';
import { loginReducer } from './loginReducer';

export const rootReducer = combineReducers({
    counter: counterReducer,
    login: loginReducer
});
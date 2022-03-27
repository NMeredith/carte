import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { REDUX_MODULE_NAME } from './constants';
import mainReducer from "./reducer";

const allReducers = combineReducers({
    [REDUX_MODULE_NAME]: mainReducer,
});
  
const buildStore = () => createStore(allReducers, applyMiddleware(thunk));

export default buildStore;
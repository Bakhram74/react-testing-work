import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';
import {  ThunkDispatch } from "redux-thunk";
const rootReducer = combineReducers(reducers)

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, void, Action>;

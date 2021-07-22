import {applyMiddleware, combineReducers, createStore,compose} from 'redux';
import { estudianteReducer } from '../reducers/estudianteReducer';
import thunk from 'redux-thunk'

const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    estudiante: estudianteReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    ));
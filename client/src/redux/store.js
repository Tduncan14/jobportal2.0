import {combineReducers,createStore} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { configureStore } from '@reduxjs/toolkit'
import {applyMiddleware,useStore} from 'react-redux';
import thunk from 'redux-thunk';
import { jobsReducer } from './reducers/jobsReducer';
import { loaderReducer } from './reducers/loadReducer';



const reducer = combineReducers({
    jobsReducer:jobsReducer,
    loaderReducer:loaderReducer
})



const store = configureStore({
    reducer,
    middleware:[thunk]

}
)





export default store;
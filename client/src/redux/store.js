import {combineReducers,createStore} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { configureStore } from '@reduxjs/toolkit'
import {applyMiddleware,useStore} from 'react-redux';
import thunk from 'redux-thunk';
import { jobsReducer } from './reducers/jobsReducer';



const reducer = combineReducers({
    jobsReducer:jobsReducer
})



const store = configureStore({
    reducer

}
)





export default store;
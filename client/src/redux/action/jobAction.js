import axios from 'axios';
import { jobsReducer } from '../reducers/jobsReducer';




export const getAllJobs = () => async dispatch => {

    dispatch({type:'LOADING', payload:true})


    try {
        const jobs = await axios.get('/api/jobs/getalljobs')
        dispatch({type:'GET_ALL_JOBS', payload:jobs.data})
        dispatch({type:'LOADING',payload:false})

    }

    catch(error){

        console.log('error')
        dispatch({type:'LOADING',payload:false})

    }



}
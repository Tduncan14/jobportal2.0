import {useState,useEffect} from 'react'
import DefaultLayout from '../../components/DefaultLayout';
import JobInfo from '../JobInfo/JobInfo';
import {useSelector, useDispatch} from 'react-redux';
import { getAllJobs } from '../../redux/action/jobAction';

function Home() {
  const jobsData = useSelector(state => state.jobsReducer);
  const dispatch = useDispatch()
  const jobs = jobsData.jobs

  useEffect(()=>{

    dispatch(getAllJobs())



  },[jobsData.length])



 




  return (
    <div>
      <DefaultLayout>
        <h1>Home page</h1>
        {jobs.length}
      </DefaultLayout>
    </div>
  )
}

export default Home


import './App.css';
import "antd/dist/antd.css";
import { Button, DatePicker, Space, version } from "antd";
import Home from './pages/Home/Home';
import JobInfo from './pages/JobInfo/JobInfo';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Profile from './pages/Profile/Profile';
import AppliedJobs from './pages/AppliedJobs/AppliedJobs';
import PostJobs from './pages/PostJobs/PostJobs';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useSelector } from 'react-redux';
import { loaderReducer } from './redux/reducers/loadReducer';

function App() {

  const {loader} = useSelector(state => state.loaderReducer)

  return (

    <div className="App">

  { loader ?  <div className="sweet-loading text-center"> <ClimbingBoxLoader
  color="#001529"
  size={75} 
/>  </div>: ' '}


    <BrowserRouter>
      <Routes>
        <Route exact path= '/'  element={<Home />} />
        <Route exact path= '/profile'  element={<Profile />} />
        <Route exact path= '/appliedjobs'  element={<AppliedJobs/>} />
        <Route exact path= '/postjobs'  element={<PostJobs/>}/>
        <Route exact path= '/jobinfo'  element={<JobInfo />} />
      
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;

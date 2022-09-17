
import './App.css';
import "antd/dist/antd.css";
import { Button, DatePicker, Space, version } from "antd";
import Home from './pages/Home/Home';
import JobInfo from './pages/JobInfo/JobInfo';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Profile from './pages/Profile/Profile';
import AppliedJobs from './pages/AppliedJobs/AppliedJobs';
import PostJobs from './pages/PostJobs/PostJobs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path= '/'  element={<Home />} />
        <Route exact path= '/profile'  element={<Profile />} />
        <Route exact path= '/appliedjobs'  element={<AppliedJobs/>} />
        <Route exact path= '/postjobs'  element={<PostJobs/>}/>
        <Route exact path= '/jobinfo'  element={<JobInfo />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;

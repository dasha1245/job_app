import './App.css';
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {JobDetails} from "./components/JobDetails/JobDetails";

function App() {
  return(
      <Routes>
        <Route path={''} element={<MainLayout/>}/>
          <Route path={':id'} element={<JobDetails/>}/>
      </Routes>
  )
}

export default App;

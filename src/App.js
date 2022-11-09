import './App.css';
import {Route, Routes} from "react-router-dom";
import {Jobs} from "./components/Jobs";

function App() {
  return(
      <Routes>
        <Route path={''} element={<Jobs/>}/>
      </Routes>
  )
}

export default App;

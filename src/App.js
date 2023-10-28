import { BrowserRouter, Routes, Route } from "react-router-dom";

import ApiDetailsContainer from './components/ApiDetails/ApiDetailsContainer';
import ExploreApiContainer from './components/ExploreApi/ExploreApiContainer';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={< ExploreApiContainer />}></Route>
          <Route exact path='/apiDetail' element={< ApiDetailsContainer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

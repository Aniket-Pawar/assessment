import { BrowserRouter, Routes, Route } from "react-router-dom";

import ApiDetailsContainer from './components/ApiDetails/ApiDetailsContainer';
import ExploreApiContainer from './components/ExploreApi/ExploreApiContainer';
import ErrorBoundaryContainer from './components/ErrorBoundary/ErrorBoundaryContainer';
import NotFoundContainer from './components/NotFound/NotFoundContainer';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <ErrorBoundaryContainer>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<ExploreApiContainer />}></Route>
            <Route exact path='/apiDetail' element={<ApiDetailsContainer />}></Route>
            <Route path="*" element={<NotFoundContainer />} ></Route>
          </Routes>
        </BrowserRouter>
      </ErrorBoundaryContainer>
    </div>
  );
}

export default App;

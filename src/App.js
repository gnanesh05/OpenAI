import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GridOptions from './Components/GridOptions';
import Tool from './Components/Tool';
function App() {
  
  
  return (
    <div className="App">
      <h1>ChatGPT Clone</h1>
      <Router>
        <Routes>
          <Route path='/'>
            <Route index element={<GridOptions/>}/>
            <Route path='AI-Tools' element={<Tool/>}/>
          </Route>
       
        </Routes>
       
      </Router>
      
       
    </div>
  );
}

export default App;

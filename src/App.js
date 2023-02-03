import './App.css';
import React ,{useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GridOptions from './Components/GridOptions';
import Tool from './Components/Tool';
function App() {
  const[option, selectOption] = useState({})

  return (
    <div className="App">
      <h1>ChatGPT Clone</h1>
      <Router>
        <Routes>
          <Route path='/'>
            <Route index element={<GridOptions selectOption={selectOption}/>}/>
            <Route path='AI-Tools' element={<Tool option={option}/>}/>
          </Route>
       
        </Routes>
       
      </Router>
      
       
    </div>
  );
}

export default App;

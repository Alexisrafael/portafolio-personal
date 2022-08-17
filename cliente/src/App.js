import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandinPage from './componets/Landinpage/landinPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandinPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

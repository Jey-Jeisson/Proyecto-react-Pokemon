import React, { component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NavBar from './Components/Layout/NavBar';
import Dashboard from './Components/Layout/Dashboard';

function App(){
  return(
    <div className="App">
      <div className = "container">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
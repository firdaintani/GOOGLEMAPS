import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Maps from './components/Map';

function App() {
  return (
    <div className="App">
    
      <Route path='/' component={Maps} exact />
     
    </div>
  );
}

export default App;

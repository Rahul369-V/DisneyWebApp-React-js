import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Component/Login';
import Header from './Component/Header';
import './App.css';
import Home from './Component/Home';
import Detail from './Component/Detail';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          
          <Route exact path ="/" element={<Login/>}/>
          <Route path='/home' element ={<Home/>}/>
          <Route path ='/detail/:id' element = {<Detail/>}/>
          
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;


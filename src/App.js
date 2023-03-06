import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import Video from './pages/Video';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/videoes/:id' element= {<Video/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

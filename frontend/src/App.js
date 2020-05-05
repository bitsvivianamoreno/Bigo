import React from 'react';
import { Header } from './components/header/header';
import './App.css';
import Router from './routes/router';

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;

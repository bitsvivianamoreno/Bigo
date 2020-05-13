import React from 'react';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import './App.css';
import Router from './routes/router';

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;

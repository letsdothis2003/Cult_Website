import React from 'react';
import './App.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Welcome to Wheezer</h1>
        <h1>Best one-man band since Michael Jackson</h1>
        <p>
          Carl Wheezer is a musician, blending iconic beats with electrifying performances. 
          Experience the magic of live music, where every instrument and vocal creates a symphony of pure artistry.
        </p>
        <a
          className="Home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;

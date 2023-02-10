import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="text-center">
      <header className="flex h-screen flex-col items-center justify-center bg-slate-800 text-2xl text-white">
        <img
          src={logo}
          className="pointer-events-none h-1/3 motion-safe:animate-spin"
          alt="logo"
          style={{
            animationDuration: '20s',
          }}
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="text-cyan-400"
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

export default App;

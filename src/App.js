import React from 'react';
import { Head } from 'react-static';

import './App.scss';
import logo from './logo.png';

const App = () => {
  return (
    <div className="App">
      <Head>
        <title>App Conference</title>
      </Head>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          Learn{' '}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>{' '}
          and{' '}
          <a
            className="App-link"
            href="https://react-static.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Static
          </a>
        </span>
      </header>
    </div>
  );
};

export default App;

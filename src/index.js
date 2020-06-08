import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js';

export const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
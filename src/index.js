import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js';
import Divider from './divider.js';
import Portfolio from './portfolio.js';
import Footer from './footer.js';

export const App = () => {
  return (
    <div>
      <Header />
      <Divider />
      <Portfolio />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
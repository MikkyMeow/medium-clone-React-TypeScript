import TopBar from 'components/TopBar';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './router';

const App: React.FC = () => {
  return (
    <Router>
      <TopBar />
      <Routes />
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ErrorBoundary from './hoc/ErrorBoundary';
import Home from './pages/Home';
import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { useMachine } from '@xstate/react';
import { Spinner } from 'react-bootstrap';

import machine, { Context, Event } from './core/machine';
import ToastError from './components/Toast';

function App() {
  const [current, send] = useMachine<Context, Event>(machine, {
    devTools: true
  });

  const fetchingState = current.matches('fetching');
  const errorState = current.matches('error');

  return (
    <div className='App'>
      <div>
        <h2>
          current state: <span>{current.value}</span>
        </h2>
      </div>
      <button
        className='Button'
        disabled={fetchingState}
        onClick={() => (errorState ? send('RETRY') : send('CLICK'))}
      >
        {!fetchingState && !errorState && 'Fetch data'}
        {fetchingState && <Spinner animation='border' />}
        {errorState && 'Retry please'}
      </button>
      <ToastError isError={errorState} />
    </div>
  );
}

export default App;

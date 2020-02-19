import './App.css';

import { useMachine } from '@xstate/react';
import React from 'react';

import machine, { Context, Event } from './core/machine';

function App() {
  const [current, send] = useMachine<Context, Event>(machine, {
    devTools: true
  });
  return (
    <div className="App">
      <div>
        <h2>
          current state: <span>{current.value}</span>
        </h2>
      </div>
      <button
        className="Button"
        disabled={current.matches("fetching")}
        onClick={() =>
          current.matches("error") ? send("RETRY") : send("CLICK")
        }
      >
        {current.matches("error") ? "Retry" : "Click"}
      </button>
    </div>
  );
}

export default App;

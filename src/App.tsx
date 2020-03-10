import { useMachine } from '@xstate/react';
import React from 'react';

import styles from './App.module.css';
import BadButton from './components/BadButton';
import Button from './components/Button';
import CharacterCard from './components/CharacterCard';
import Loader from './components/Loader';
import machine, { Context, Event } from './core/machine';

function App() {
  const [current, send] = useMachine<Context, Event>(machine, {
    devTools: true
  });

  const fetchingState: boolean = current.matches("fetching");
  const errorState: boolean = current.matches("error");

  const character = current.context.characters[1];

  return (
    <div className={styles.App}>
      <div>
        <h2>
          current state: <span>{current.value}</span>
        </h2>
      </div>
      <div className={styles.group_button}>
        <Button
          disabled={fetchingState}
          onClick={() => (errorState ? send("RETRY") : send("FETCH"))}
        >
          {fetchingState && (
            <span style={{ marginRight: 10 }}>
              <Loader />
            </span>
          )}
          {!errorState && "Good button"}
          {errorState && "Retry please"}
        </Button>

        {/* <ToastError isError={errorState} /> */}

        <BadButton />
      </div>

      <div style={{ marginTop: "100px" }}>
        {character && <CharacterCard {...character} />}
      </div>
    </div>
  );
}

export default App;

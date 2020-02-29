/* eslint-disable @typescript-eslint/no-unused-vars */
import { assign, DoneInvokeEvent, EventObject, Machine } from 'xstate';

import { getCharacters } from '../../services/api';

export interface Context {
  characters: [];
}

export interface Schema {
  states: {
    idle: {};
    fetching: {};
    error: {};
  };
}

export interface Event extends EventObject {
  type: 'CLICK' | 'RETRY';
}

export default Machine<Context, Schema, Event>(
  {
    id: 'machine',
    initial: 'idle',
    context: {
      characters: []
    },
    states: {
      idle: {
        on: {
          CLICK: 'fetching'
        }
      },
      fetching: {
        invoke: {
          src: () => getCharacters(),
          onDone: {
            target: 'idle',
            actions: 'assignCharacters'
          },
          onError: 'error'
        }
      },
      error: {
        on: {
          RETRY: 'fetching'
        }
      }
    }
  },
  {
    actions: {
      assignCharacters: assign((_, event) => ({
        characters: (event as DoneInvokeEvent<any>).data.results
      }))
    }
  }
);

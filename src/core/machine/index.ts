/* eslint-disable @typescript-eslint/no-unused-vars */
import { assign, DoneInvokeEvent, EventObject, Machine } from 'xstate';

import { getError } from '../../services/api';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

export interface Context {
  characters: Character[];
}

export interface Schema {
  states: {
    idle: {};
    fetching: {};
    error: {};
    success: {};
  };
}

export interface Event extends EventObject {
  type: "FETCH" | "RETRY";
}

export default Machine<Context, Schema, Event>(
  {
    id: "machine",
    initial: "idle",
    context: {
      characters: []
    },
    states: {
      idle: {
        on: {
          FETCH: "fetching"
        }
      },
      fetching: {
        invoke: {
          src: () => getError(),
          onDone: {
            target: "success",
            actions: "assignCharacters"
          },
          onError: "error"
        }
      },
      error: {
        on: {
          RETRY: "fetching"
        }
      },
      success: {
        on: {
          FETCH: "fetching"
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

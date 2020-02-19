import { createContext } from 'react';
import { Interpreter, State } from 'xstate';

import { Context as MachineContext, Event, Schema } from './machine';

export type Context = [
  State<MachineContext, Event>,
  Interpreter<MachineContext, Schema, Event>["send"]
];

const context = createContext<Context>(
  // @ts-ignore
  []
);

const { Provider, Consumer } = context;
export { Provider, Consumer };

export default context;

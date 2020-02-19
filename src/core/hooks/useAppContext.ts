import { useContext } from 'react';

import context, { Context } from '../';

export default function useAppContext() {
  return useContext<Context>(context);
}

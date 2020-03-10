import React from 'react';

import { getCharacters } from '../services/api';

export default function BadButton() {
  return (
    <button
      style={{ height: 34, marginLeft: 30 }}
      onClick={() => getCharacters()}
    >
      Bad Buton
    </button>
  );
}

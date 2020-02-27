import React from 'react';
import { Button } from 'react-bootstrap';
import { getCharacters } from '../services/api';

export default function BadButton() {
  return (
    <Button variant='outline-primary' onClick={() => getCharacters()}>
      Bad Buton
    </Button>
  );
}

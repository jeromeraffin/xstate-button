import React from 'react';
import { Toast } from 'react-bootstrap';

interface Props {
  isError: boolean;
}

export default function ToastError({ isError }: Props) {
  return (
    <Toast show={isError} delay={3000} autohide>
      <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
    </Toast>
  );
}

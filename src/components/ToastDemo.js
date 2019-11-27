import { useToasts } from 'react-toast-notifications';
import React from "react";
import { Button } from "react-bootstrap";

export const ToastDemo = ({ content }) => {
  const { addToast } = useToasts()
  return (
    <Button onClick={() => addToast(content, {
      appearance: 'error',
      autoDismiss: true,
    })}>
      Add Toast
    </Button>
  )
}

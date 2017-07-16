import React from 'react';

const ErrorMsg = ({msg, onRetry}) => (

  <div>
    <p>Se ha producido un error</p>
    <p>{msg}</p>
    <button onClick={onRetry}>Recarga</button>
  </div>

);

export default ErrorMsg;
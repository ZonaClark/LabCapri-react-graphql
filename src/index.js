import React from 'react';
import ReactDOM from 'react-dom';

const title = 'LabCapri';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app'),
);

// Use hot module replacement
module.hot.accept();

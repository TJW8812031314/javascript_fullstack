import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style'
import { IconGlobalStyle } from './statics/iconfont/iconfont.js'
import App from './App';

ReactDOM.render(
  <div>
    <GlobalStyle />
    <IconGlobalStyle />
    <App />
  </div>,
  document.getElementById('root')
);


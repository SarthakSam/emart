import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app/App';
import reportWebVitals from './reportWebVitals';

import { StoreProvider } from './contexts/store.context';
import { LoaderProvider } from './contexts/loader-context';
import { NotificationsProvider } from './contexts/notifications-context';

import {server} from './api/mock.server';


server();

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <LoaderProvider>
        <NotificationsProvider>
          <App />
        </NotificationsProvider>
      </LoaderProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

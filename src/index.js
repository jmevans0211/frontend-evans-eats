import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { rootReducer } from './reducers';
import App from './App/App';
import './index.css';

const store = createStore(rootReducer, composeWithDevTools());

const router = (
  <BrowserRouter>
    <Provider store={ store }>
      <App />
    </Provider>
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux';
import createRootReducer from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

const history = createBrowserHistory()
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware, routerMiddleware(history)))
const store = createStore(createRootReducer(history), composedEnhancer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

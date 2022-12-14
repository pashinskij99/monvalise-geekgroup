import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.scss'
import App from './components/app';
import { Provider } from 'react-redux';
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
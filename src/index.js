import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/configureStore';
import { Provider, } from "react-redux";
const Index = () => {
  return (


    <Provider store={store}>
      <App />
    </Provider>

  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>

);


reportWebVitals();

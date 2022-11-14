import React from 'react';
import { Provider } from "react-redux";
import store from "./store/ReduxStore";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

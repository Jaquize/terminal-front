import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
  
import './assets/scss/index.scss';
import 'react-calendar/dist/Calendar.css';

import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root')

const client = new ApolloClient({
  uri : 'http://192.168.0.4:8080/graphql',
  cache : new InMemoryCache(),

})


ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
  </BrowserRouter>
  // </React.StrictMode> 
,root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

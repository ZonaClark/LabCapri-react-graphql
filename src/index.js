import 'dotenv/config';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, concat } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';

import './style.css';
import App from './App';

const LC_BASE_URL = 'https://labcapri-graphql-server.herokuapp.com/graphql';

const httpLink = new HttpLink({
  uri: LC_BASE_URL,
});

// Middleware for adding authentication token to every query
const authMiddleware = new ApolloLink((operation, forward) => {
  // add authorization to the headers
  operation.setContext({
    headers: {
      authorization: process.env.LC_PERSONAL_ACCESS_TOKEN || null,
    },
  });

  return forward(operation);
});

// Create the cache where the data is managed in Apollo Client
const cache = new InMemoryCache();

// Create the instance of the Apollo Client
const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);

// Use hot module replacement
module.hot.accept();

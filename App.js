import React, { Component } from 'react';
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux';

import AppReducer from './src/redux';
import { AppNavigator, middleware } from './src/navigation/AppNavigator';

const store = createStore(AppReducer, applyMiddleware(middleware));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
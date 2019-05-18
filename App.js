import React from 'react';
import Main from './Main';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

const store = createStore();

export default () => (
<Provider store={store}>
<Main />
</Provider>
);
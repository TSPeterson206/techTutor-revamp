import React from 'react';
import Main from './Main';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import tutorsReducer from './reducers/tutorsReducer'

const store = createStore(tutorsReducer);

export default () => (
<Provider store={store}>
<Main />
</Provider>
);
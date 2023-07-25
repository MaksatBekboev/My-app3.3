import React from 'react';
import { Provider } from 'react-redux';
import NumberInput from './NumberInput';
import NumberList from './NumberList';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <NumberInput />
        <NumberList />
      </div>
    </Provider>
  );
};

export default App;
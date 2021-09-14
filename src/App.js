import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';
import MainContainer from './views/MainContainer/mainContainer.view';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainContainer />
      </div>
    </Provider>
  );
}

export default App;

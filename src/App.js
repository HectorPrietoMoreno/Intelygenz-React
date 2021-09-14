import React from 'react';

import { Route, BrowserRouter as Router, } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';
import MainContainer from './views/MainContainer/mainContainer.view';
import Details from './views/Details/details.view';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route exact path='/' component={MainContainer} />
          <Route path='/details/:index' component={Details} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;

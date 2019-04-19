import React, { Component } from 'react';
import '../styles/base.css'
import { Provider } from 'react-redux'
import store from '../store'
// import { BrowserRouter as Router, Route } from 'react-router-dom'

import GHRender from './GHRender'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <GHRender />
        </div>
      </Provider>
    )
  }
}

export default App;

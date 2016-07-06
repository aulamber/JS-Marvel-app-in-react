import React from 'react'
import {render} from 'react-dom'
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import rootReducer from './reducers/index'
import Main from './containers/main'
import CharacterDetails from './containers/characterDetails'
require('whatwg-fetch')

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(thunk, routerMiddleware(browserHistory), createLogger())
)

const history = syncHistoryWithStore(browserHistory, store)

history.listen(location => console.log(`==> ROUTE: ${location.pathname}`))

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Main} />
      <Route path='character/:id' component={CharacterDetails} />
    </Router>
  </Provider>,
  document.getElementById("myApp")
);

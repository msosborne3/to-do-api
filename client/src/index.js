import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk';
//Routing:
import { Router, Route, browserHistory } from 'react-router';
import ListPage from './containers/ListPage';
import ListShow from './containers/ListShow';
import ListNew from './containers/ListNew';
import ItemsNew from './containers/ItemsNew';


const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='/lists' component={ListPage}>
          <Route path='/lists/new' component={ListNew} />
          <Route path='/lists/:id' component={ListShow}>
            <Route path='/lists/:id/items/new' component={ItemsNew} />
          </Route>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk';
//Routing:
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import ListPage from './containers/ListPage';
import ListShow from './containers/ListShow';
import ListNew from './containers/ListNew';
import ItemsNew from './containers/ItemsNew';


const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
//const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/lists/new' component={ListNew} />
          <Route exact path='/lists/:id' component={ListShow} />
          <Route exact path='/items/new' component={ItemsNew} />
        </Switch>
      </BrowserRouter>
    </App>
  </Provider>,
  document.getElementById('root')
);

import { combineReducers } from 'redux';

import itemsReducer from './itemsReducer';
import listReducer from './listReducer';

const rootReducer = combineReducers({
  items: itemsReducer,
  lists: listReducer
});

export default rootReducer;
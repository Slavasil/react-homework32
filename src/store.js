import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import listReducer from './listReducer';
import detailsReducer from './detailsReducer';
import { downloadListEpic, downloadDetailsEpic } from './epics';

const rootReducer = combineReducers({
  list: listReducer,
  details: detailsReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const epic = combineEpics(downloadListEpic, downloadDetailsEpic);
const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(epicMiddleware)
));
epicMiddleware.run(epic);

export default store;

import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import signIn from "./login";
import Tasks from "./task";

const reducers = combineReducers({ signIn,Tasks });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
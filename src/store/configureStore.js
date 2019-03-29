import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import expenseReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
import thunk from "redux-thunk";

const componentEnhansers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store creation

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expenseReducer,
      filters: filtersReducer
    }),
    componentEnhansers(applyMiddleware(thunk))
  );
  return store;
};

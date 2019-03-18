import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense, editExpense, removeExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import visableExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

// addExpense -> water bill
store.dispatch(addExpense({ description: "water bill", amount: 2222 }));

// addExpense -> gas bill
store.dispatch(
  addExpense({ description: "gas bill", amount: 3333, createdAt: 1000 })
);

// addExpense -> rent
store.dispatch(addExpense({ description: "rent", amount: 99999 }));

// setTextFilter -> bill 2 (items) -> water (1 item)
// store.dispatch(setTextFilter("bill"));

// setTimeout(() => {
//   store.dispatch(setTextFilter("rent"));
// }, 4000);

// setTimeout(() => {
//   store.dispatch(setTextFilter());
// }, 5000);

// getVisableExpenses -> print visable ones to the screen
// console.log(store.getState());
// const state = store.getState();
// console.log(visableExpenses(state.expenses, state.filters));

// console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

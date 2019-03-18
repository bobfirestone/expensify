import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import visableExpenses from "../selectors/expenses";

export const ExpenseList = props => (
  <div>
    {props.expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
      props.expenses.map((expense, index) => (
        <ExpenseListItem {...expense} key={expense.id} />
      ))
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: visableExpenses(state.expenses, state.filters)
  };
};
export default connect(mapStateToProps)(ExpenseList);

import expenseReducer from "../../reducers/expenses";
import { expense, singleExpense } from "../fixtures/expenses";

test("should default to an empty array", () => {
  const state = expenseReducer(undefined, {});
  expect(state).toEqual([]);
});

test("should add expense", () => {
  const state = expenseReducer(undefined, {
    type: "ADD_EXPENSE",
    expense
  });
  expect(state).toEqual(singleExpense);
});

test("should remove expense", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expense.id
  };
  const state = expenseReducer(singleExpense, action);
  expect(state).toEqual([]);
});

test("should not remove anything if no id matches", () => {
  const action = { type: "REMOVE_EXPENSE", id: "666" };
  const state = expenseReducer(singleExpense, action);
  expect(state).toEqual(singleExpense);
});

test("should update expense", () => {
  const amount = 666;
  const action = {
    type: "EDIT_EXPENSE",
    id: expense.id,
    updates: { amount }
  };
  const state = expenseReducer(singleExpense, action);
  expect(state[0].amount).toBe(amount);
});

test("should not modify current state if expense not found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "666",
    updates: { description: "does not matter" }
  };
  const state = expenseReducer(singleExpense, action);
  expect(state).toEqual(singleExpense);
});

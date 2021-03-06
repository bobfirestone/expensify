import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  addExpense,
  editExpense,
  removeExpense,
  startAddExpense
} from "../../actions/expenses";
import database from "../../firebase/firebase";
import { expense } from "../fixtures/expenses";

const createMockStore = configureMockStore([thunk]);

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123" });
  expect(action).toEqual({ type: "REMOVE_EXPENSE", id: "123" });
});

test("should setup edit expense action object", () => {
  const action = editExpense("123", { amount: 200, description: "tacos" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123",
    updates: { amount: 200, description: "tacos" }
  });
});

test("should setup add expense object with provided values", () => {
  const action = addExpense(expense);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense
  });
});

test("should add expense to database and store", done => {
  const store = createMockStore({});
  const expenseData = {
    description: "test expense",
    amount: 666,
    note: "test can have notes too",
    createdAt: 1234567890
  };

  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("should add expense with defaults to database and store", done => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0
  };

  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseDefaults
        }
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    });
});

// test("should setup add expense object with default values", () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: "ADD_EXPENSE",
//     expense: {
//       description: "",
//       note: "",
//       amount: 0,
//       createdAt: 0,
//       id: expect.any(String)
//     }
//   });
// });

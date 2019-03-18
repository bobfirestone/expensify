import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

const uuid = () => 1;

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
  const expenseData = {
    description: "test",
    note: "test note",
    amount: 100,
    createdAt: 1234567890
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("should setup add expense object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});

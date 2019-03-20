import { expensesTotal } from "../../selectors/expenses-total";

const expenses = [
  {
    id: "1",
    description: "test one",
    note: "",
    amount: 111,
    createdAt: 0
  },
  {
    id: "2",
    description: "test two",
    note: "",
    amount: 222,
    createdAt: 0
  },
  {
    id: "3",
    description: "test three",
    note: "",
    amount: 333,
    createdAt: 0
  }
];

const oneExpense = [
  {
    id: "1",
    description: "test one",
    note: "",
    amount: 111,
    createdAt: 0
  }
];

test("should total multiple expenses", () => {
  const total = expensesTotal(expenses);
  expect(total).toBe(666);
});

test("should total only 1 expense", () => {
  const total = expensesTotal(oneExpense);
  expect(total).toBe(111);
});

test("should return 0 when no expenses", () => {
  const total = expensesTotal([]);
  expect(total).toBe(0);
});

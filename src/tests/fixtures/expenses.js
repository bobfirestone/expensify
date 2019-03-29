import moment from "moment";

export const expenses = [
  {
    id: "1",
    description: "test one 1 - textAndAmount",
    note: "",
    amount: 1,
    createdAt: 0
  },
  {
    id: "2",
    description: "test two 2 - textAndAmount",
    note: "",
    amount: 22,
    createdAt: moment(0)
      .add(1, "weeks")
      .valueOf()
  },
  {
    id: "3",
    description: "test three",
    note: "",
    amount: 333,
    createdAt: moment(0)
      .subtract(1, "weeks")
      .valueOf()
  }
];

export const firebaseExpenses = [
  {
    description: "test one 1 - textAndAmount",
    note: "",
    amount: 1,
    createdAt: 0
  },
  {
    description: "test two 2 - textAndAmount",
    note: "",
    amount: 22,
    createdAt: moment(0)
      .add(1, "weeks")
      .valueOf()
  },
  {
    description: "test three",
    note: "",
    amount: 333,
    createdAt: moment(0)
      .subtract(1, "weeks")
      .valueOf()
  }
];

export const expense = {
  id: "1",
  description: "test",
  amount: 100,
  note: "",
  createdAt: 0
};

export const singleExpense = [expense];

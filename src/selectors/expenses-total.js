export const expensesTotal = expenses => {
  return expenses.reduce((n, expense) => n + expense.amount, 0);
};

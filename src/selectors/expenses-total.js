export default expenses => {
  return expenses.reduce((n, expense) => n + expense.amount, 0);
};

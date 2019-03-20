import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("should should render 0 items & $0 when no expenses are given", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={0} expensesTotal={0} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render given a single expense", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={100} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render given multiple expenses", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={3} expensesTotal={356} />
  );
  expect(wrapper).toMatchSnapshot();
});

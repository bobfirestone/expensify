import React from "react";
import { shallow } from "enzyme";
import { defaultFilters, altFilters } from "../fixtures/filters";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";

let setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={defaultFilters}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("should render ExpenseListFilters correctly with defaultFilters", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters correctly with altFilters", () => {
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const value = "test string";
  wrapper.find("input").simulate("change", { target: { value } });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should handle text change", () => {
  const value = "test string";
  wrapper.find("input").simulate("change", { target: { value } });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should sort by date", () => {
  wrapper.setProps({ filters: altFilters });
  wrapper.find("select").simulate("change", { target: { value: "date" } });
  expect(sortByDate).toHaveBeenCalledTimes(1);
});

test("should sort by amount", () => {
  wrapper.find("select").simulate("change", { target: { value: "amount" } });
  expect(sortByAmount).toHaveBeenCalledTimes(1);
});

test("should handle date change", () => {
  const startDate = altFilters.startDate;
  const endDate = altFilters.endDate;
  wrapper.find("DateRangePicker").prop("onDatesChange")({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("should handle date focus change", () => {
  const calendarFocused = "startDate";
  wrapper.find("DateRangePicker").prop("onFocusChange")(calendarFocused);
  expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
});

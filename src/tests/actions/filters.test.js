import moment from "moment";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "../../actions/filters";

test("should generate set text filter object with specified value", () => {
  const filter = setTextFilter("test");
  expect(filter).toEqual({ type: "SET_TEXT_FILTER", text: "test" });
});

test("should generate set text filter object with default value", () => {
  const filter = setTextFilter();
  expect(filter).toEqual({ type: "SET_TEXT_FILTER", text: "" });
});

test("should generate sort by date object", () => {
  const filter = sortByDate();
  expect(filter).toEqual({ type: "SORT_BY_DATE" });
});

test("should generate sort by amount object", () => {
  const filter = sortByAmount();
  expect(filter).toEqual({ type: "SORT_BY_AMOUNT" });
});

test("should generate set start date object", () => {
  const filter = setStartDate(moment(0));
  expect(filter).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("should generate a set end date object", () => {
  const filter = setEndDate(moment(0));
  expect(filter).toEqual({ type: "SET_END_DATE", endDate: moment(0) });
});

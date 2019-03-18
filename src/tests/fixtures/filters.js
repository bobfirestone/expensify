import moment from "moment";

const defaultFilters = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const altFilters = {
  text: "test",
  sortBy: "amount",
  startDate: moment(0),
  endDate: moment(3).add(3, "days")
};

export { defaultFilters, altFilters };

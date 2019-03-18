import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header";

test("should render Header", () => {
  const wrapper = shallow(<Header />);
  // trivial tests
  // expect(wrapper.find("h1").length).toBe(1);
  // expect(wrapper.find("h1").text()).toBe("Expensify");

  expect(wrapper).toMatchSnapshot();

  // Using ReactShallowRender instead of enzyme
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

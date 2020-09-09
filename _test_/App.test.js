import React from "react";
import { shallow } from "enzyme";

import App from "../src/App";

let wrapped = shallow(<App />);
describe("Welcome", () => {
  it("renders the Titles children", () => {
    expect(wrapped).toMatchSnapshot();
  });
});

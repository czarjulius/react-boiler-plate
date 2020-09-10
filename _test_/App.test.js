import React from "react";
import { shallow } from "enzyme";
import App from '../src/App';

describe("App Component", () => {
  it("renders without crashing", () => {
   shallow(<App />);
  });
});

import React from "react";
import { render } from "@testing-library/react";
import Title from '.';

describe("Title", () => {
  it("can render large fonts", () => {
    const { getByText } = render(<Title type="large" title="large" />);
    const content = getByText('large');
    expect(content).toMatchSnapshot();    
  });

  it("can render small fonts", () => {
    const { getByText } = render(<Title type="small" title="small" />);
    const content = getByText('small');
    expect(content).toMatchSnapshot();
  });
});

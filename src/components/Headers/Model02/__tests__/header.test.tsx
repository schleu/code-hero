import "@testing-library/jest-dom/vitest";
import { render } from "@testing-library/react";
import { expect } from "vitest";
import { Header } from "../index";

describe("<Header />", () => {
  it("Should be have logo", () => {
    const component = render(<Header />);
    expect(component.getAllByTestId("logo")).toHaveLength(1);
  });

  it("Header Snapshot", () => {
    const component = render(<Header />);
    expect(component).toMatchSnapshot("Default");
  });
});

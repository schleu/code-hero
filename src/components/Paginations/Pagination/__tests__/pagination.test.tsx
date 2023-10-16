import "@testing-library/jest-dom/vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import { expect } from "vitest";
import { Pagination } from "../index";

describe("<Pagination />", () => {
  it("Pagination Snapshot 1-10", () => {
    const component = render(
      <Pagination actual={1} total={10} getActualPage={() => {}} />
    );
    expect(component).toMatchSnapshot("Default 1-10");
  });

  it("Pagination Snapshot 5-10", () => {
    const component = render(
      <Pagination actual={5} total={10} getActualPage={() => {}} />
    );
    expect(component).toMatchSnapshot("Default  5-10");
  });

  it("Pagination Snapshot 10-10", () => {
    const component = render(
      <Pagination actual={10} total={10} getActualPage={() => {}} />
    );
    expect(component).toMatchSnapshot("Default  10-10");
  });

  it("Should be have pagination itens and fake itens", () => {
    const component = render(
      <Pagination actual={1} total={10} getActualPage={() => {}} />
    );

    const item = component.getAllByTestId("paginationItem");
    const fake = component.getAllByTestId("fakeItem");

    expect(item).toHaveLength(4);
    expect(fake).toHaveLength(4);

    expect(component.getAllByText("1")).toHaveLength(1);
    expect(component.getAllByText("2")).toHaveLength(1);
    expect(() => component.getAllByText("3")).not.toHaveLength(1);
    expect(component.getAllByText("...")).toHaveLength(1);
    expect(component.getAllByText("10")).toHaveLength(1);
  });

  it("Should be able to next page", () => {
    const component = render(
      <Pagination actual={1} total={10} getActualPage={() => {}} />
    );

    const item = component.getAllByTestId("paginationItem");
    expect(item).toHaveLength(4);

    expect(() => component.getAllByText("3")).toThrow();
    expect(() => component.getAllByText("3")).not.toHaveLength(1);

    const nextPage = component.getAllByTestId("nextPage");
    expect(nextPage).toHaveLength(1);

    fireEvent.click(screen.getByTestId("nextPage"));

    expect(component.getAllByText("1")).toHaveLength(1);
    expect(component.getAllByText("2")).toHaveLength(1);
    expect(component.getAllByText("3")).toHaveLength(1);
    expect(component.getAllByText("...")).toHaveLength(1);
    expect(component.getAllByText("10")).toHaveLength(1);
  });

  it("Should be able to previous page", () => {
    const component = render(
      <Pagination actual={3} total={10} getActualPage={() => {}} />
    );

    const item = component.getAllByTestId("paginationItem");
    expect(item).toHaveLength(6);

    expect(component.getAllByText("1")).toHaveLength(1);
    expect(component.getAllByText("2")).toHaveLength(1);
    expect(component.getAllByText("3")).toHaveLength(1);
    expect(component.getAllByText("...")).toHaveLength(1);
    expect(component.getAllByText("10")).toHaveLength(1);

    const previousPage = component.getAllByTestId("previousPage");
    expect(previousPage).toHaveLength(1);

    fireEvent.click(screen.getByTestId("previousPage"));

    expect(component.getAllByText("1")).toHaveLength(1);
    expect(component.getAllByText("2")).toHaveLength(1);
    expect(() => component.getAllByText("3")).not.toHaveLength(1);
    expect(component.getAllByText("...")).toHaveLength(1);
    expect(component.getAllByText("10")).toHaveLength(1);
  });

  it("Should be able to change especific page", () => {
    const component = render(
      <Pagination actual={3} total={10} getActualPage={() => {}} />
    );

    const item = component.getAllByTestId("paginationItem");
    expect(item).toHaveLength(6);

    expect(component.getAllByText("1")).toHaveLength(1);
    expect(component.getAllByText("2")).toHaveLength(1);
    expect(component.getAllByText("3")).toHaveLength(1);
    expect(component.getAllByText("...")).toHaveLength(1);
    expect(component.getAllByText("10")).toHaveLength(1);

    const previousPage = component.getAllByTestId("previousPage");
    expect(previousPage).toHaveLength(1);
    const nextPage = component.getAllByTestId("nextPage");
    expect(nextPage).toHaveLength(1);

    fireEvent.click(screen.getByText("10"));

    expect(() => component.getAllByText("1")).not.toHaveLength(1);
    expect(() => component.getAllByText("2")).not.toHaveLength(1);
    expect(() => component.getAllByText("3")).not.toHaveLength(1);
    expect(component.getAllByText("...")).toHaveLength(1);
    expect(component.getAllByText("9")).toHaveLength(1);
    expect(component.getAllByText("10")).toHaveLength(1);

    expect(() => component.getAllByTestId("nextPage")).toThrow();
    expect(() => component.getAllByTestId("nextPage")).not.toHaveLength(1);
  });
});

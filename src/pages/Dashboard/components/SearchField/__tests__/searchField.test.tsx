import "@testing-library/jest-dom/vitest";
import { render } from "@testing-library/react";
import { expect } from "vitest";
import { SearchField } from "../index";

describe("<SearchField />", () => {
  it("SearchField Snapshot", () => {
    const component = render(
      <SearchField label="Insira o que quer pesquisar" />
    );
    expect(component).toMatchSnapshot("Default 1-10");
  });

  it("Should be have SearchField itens and fake itens", () => {
    const component = render(
      <SearchField label="Insira o que quer pesquisar" />
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
});

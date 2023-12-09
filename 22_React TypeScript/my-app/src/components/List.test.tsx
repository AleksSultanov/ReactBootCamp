import { render, screen } from "@testing-library/react";
import { List } from "./List";

const fakeProps = {
  onItemSelect: function () {
    console.log("select");
  },
  selected: null,
  items: [
    {
      id: 1,
      userId: 2,
      text: "Item text",
    },
  ],
};

describe("List component", () => {
  test("render list", () => {
    render(
      <List
        items={fakeProps.items}
        selected={fakeProps.selected}
        onItemSelect={fakeProps.onItemSelect}
      />
    );
    const findedText = screen.getByText("Item text");

    expect(findedText).toBeInTheDocument();
  });

  test("render empty list message", () => {
    render(
      <List
        items={[]}
        selected={fakeProps.selected}
        onItemSelect={fakeProps.onItemSelect}
      />
    );
    const message = screen.getByText("Список пуст");

    expect(message).toBeInTheDocument();
  });
});

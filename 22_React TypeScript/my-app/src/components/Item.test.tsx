import { render } from "@testing-library/react";
import { Item } from "./Item";

const fakeProps = {
  onItemSelect: function () {
    console.log("select");
  },
  selected: {
    id: 1,
    userId: 2,
    text: "Item text",
  },
  item: {
    id: 1,
    userId: 2,
    text: "Item text",
  },
};

describe("Item component", () => {
  test("render Item", () => {
    const { container } = render(
      <Item
        item={fakeProps.item}
        selected={fakeProps.selected}
        onItemSelect={fakeProps.onItemSelect}
      >
        Hey
      </Item>
    );

    expect(container.firstChild).toHaveClass("selected");
  });
});

import { TItem } from "../types";
import { Item } from "./Item";

type Props = {
  onItemSelect: (item: TItem) => void;
  selected: TItem | null;
  items: TItem[];
};

export function List({ items, onItemSelect, selected }: Props) {
  return (
    <>
      <ul>
        {items.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              onItemSelect={onItemSelect}
              selected={selected}
            >
              {item.text}
            </Item>
          );
        })}
      </ul>
      {items.length === 0 && <p>Список пуст</p>}
    </>
  );
}

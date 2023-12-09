import cn from "classnames";
import { TItem } from "../types";
import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
  onItemSelect: (item: TItem) => void;
  selected: TItem | null;
  item: TItem;
};

export function Item({ children, onItemSelect, selected, item }: Props) {
  return (
    <li
      onClick={() => onItemSelect(item)}
      className={cn(styles.item, {
        [styles.selected]: selected?.id === item.id,
        selected: selected?.id === item.id,
      })}
    >
      {children}
    </li>
  );
}

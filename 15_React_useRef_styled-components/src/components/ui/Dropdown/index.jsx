import { useState } from 'react';
import {
  DropdownButton,
  DropdownContainer,
  DropdownItem,
  DropdownLabel,
  DropdownList,
} from './styles';

export function Dropdown({ label = 'Лейбл' }) {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState('Россия');

  function open() {
    setOpen(true);
  }
  function close() {
    setOpen(false);
  }
  function onChange(item) {
    setSelected(item);
    close();
  }

  return (
    <DropdownContainer>
      <DropdownLabel>{label}</DropdownLabel>
      <DropdownButton onClick={open}>{selected}</DropdownButton>
      <DropdownList open={isOpen}>
        <DropdownItem
          onClick={() => {
            onChange('Россия');
          }}
          active={selected === 'Россия'}
        >
          Россия
        </DropdownItem>
        <DropdownItem
          onClick={() => {
            onChange('ОАЭ');
          }}
          active={selected === 'ОАЭ'}
        >
          ОАЭ
        </DropdownItem>
        <DropdownItem
          onClick={() => {
            onChange('Монголия');
          }}
          active={selected === 'Монголия'}
        >
          Монголия
        </DropdownItem>
      </DropdownList>
    </DropdownContainer>
  );
}

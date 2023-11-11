import { useEffect, useState } from 'react';
import {
  DropdownButton,
  DropdownContainer,
  DropdownItem,
  DropdownLabel,
  DropdownList,
} from './styles';

const COUNTRIES = [
  { id: 1,
    name: "Россия" 
  },
  { id: 2,
    name: "Казахстан" 
  },
  { id: 3,
    name: "Узбекистан" 
  },
  { id: 4,
    name: "Беларусь" 
  },
]

export function Dropdown({ label = 'Лейбл' }) {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState('');

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
      <DropdownButton onClick={open}>{selected.name || 'Не выбрано'}</DropdownButton>
      <DropdownList open={isOpen}>
        {COUNTRIES.map((country) => (
          <DropdownItem
            onClick={() => {
              onChange(country);
            }}
            active = {selected.id === country.id}
            key={country.id}
          >
            {country.name}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
}

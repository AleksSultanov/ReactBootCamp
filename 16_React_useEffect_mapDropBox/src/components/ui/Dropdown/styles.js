import styled from 'styled-components';

export const DropdownContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

export const DropdownButton = styled.button`
  padding: 12px 16px;
  border: 1px solid #e3e8ec;
  background-color: transparent;
  color: black;
  text-align: left;
`;

export const DropdownList = styled.ul`
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  background-color: white;
  border: 1px solid #e3e8ec;
  border-radius: 0 0 8px 8px;
  z-index: 1;
`;

export const DropdownItem = styled.li`
  padding: 12px 16px;
  border-bottom: 1px solid #e3e8ec;
  background-color: ${(props) => (props.active ? '#f03b83' : 'transparent')};
  color: ${(props) => (props.active ? 'white' : 'black')};
  cursor: pointer;
`;

export const DropdownLabel = styled.label`
  text-align: left;
  color: #868b95;
`;

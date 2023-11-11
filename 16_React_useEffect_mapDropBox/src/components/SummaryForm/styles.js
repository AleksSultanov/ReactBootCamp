import styled from 'styled-components';

export const Title = styled.h1`
  color: ${(props) => props.color};
  opacity: ${(props) => (props.active ? '1' : '0')};
`;

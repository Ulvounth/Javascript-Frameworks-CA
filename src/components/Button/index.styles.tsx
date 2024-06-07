import styled from 'styled-components';

export const Button = styled.button<{ $fullWidth?: boolean }>`
  background-color: var(--bg-purple);
  color: white;
  font-size: 1rem;
  border: none;
  padding: 0.5em 2em;
  border-radius: 50px;
  cursor: pointer;
  width: ${(props) => (props.$fullWidth ? '100%;' : 'initial;')}
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: var(--bg-purple-dark);
  }
`;

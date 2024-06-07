import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
  margin: auto;
  background-color: var(--bg-tertiary);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 2em;
  color: white;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SubmitButton = styled.button`
  background-color: var(--bg-purple);
  color: white;
  font-size: 1rem;
  border: none;
  padding: 0.5em 2em;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: var(--bg-purple-dark);
  }
`;

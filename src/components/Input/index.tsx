import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: medium;
  margin-bottom: 0.5em;
`;

const StyledInput = styled.input`
  font-family: 'Poppins';
  display: block;
  width: 100%;
  padding: 0.5rem 0.75em;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  color: black;
  &:focus {
    outline: none;
    border-color: #4c51bf;
    ring: 2px #4c51bf;
  }
`;

const ErrorMessage = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #e53e3e;
`;

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  error?: string;
}

const Input = ({
  name,
  value,
  onChange,
  label,
  type = 'text',
  error,
  ...restProps
}: InputProps) => {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <StyledInput
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        {...restProps}
      />
      {error && <ErrorMessage id={`${name}-error`}>{error}</ErrorMessage>}
    </div>
  );
};

export default Input;

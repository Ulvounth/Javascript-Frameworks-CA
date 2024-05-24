import styled from 'styled-components';

const StyledPrimaryButton = styled.button<{ $fullWidth?: boolean }>`
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

type ButtonType = 'button' | 'submit' | 'reset' | undefined;

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: ButtonType;
  children?: React.ReactNode;
  fullWidth?: boolean;
}

const Button = ({
  type = 'button',
  children,
  fullWidth = false,
  ...restProps
}: ButtonProps) => {
  return (
    <StyledPrimaryButton type={type} $fullWidth={fullWidth} {...restProps}>
      {children}
    </StyledPrimaryButton>
  );
};

export default Button;

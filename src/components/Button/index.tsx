import * as Styled from './index.styles';

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
    <Styled.Button type={type} $fullWidth={fullWidth} {...restProps}>
      {children}
    </Styled.Button>
  );
};

export default Button;

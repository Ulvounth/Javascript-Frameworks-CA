import { Label } from '../Input';
import { styled } from 'styled-components';

interface TextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
  error?: string;
}

const StyledTextarea = styled.textarea`
  font-family: 'Poppins';
  resize: none;
  min-height: 200px;
  width: 100%;
  padding: 0.75em;
  color: black;
`;

const ErrorMessage = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #e53e3e;
`;

const Textarea = ({ label, htmlFor, error, ...restProps }: TextAreaProps) => {
  return (
    <div>
      <Label htmlFor={htmlFor}>{label}</Label>
      <StyledTextarea {...restProps}></StyledTextarea>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

export default Textarea;

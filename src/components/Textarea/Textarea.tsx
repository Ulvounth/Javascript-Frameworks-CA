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

const Textarea = ({ label, htmlFor, ...restProps }: TextAreaProps) => {
  return (
    <div>
      <Label htmlFor={htmlFor}>{label}</Label>
      <StyledTextarea {...restProps}></StyledTextarea>
    </div>
  );
};

export default Textarea;

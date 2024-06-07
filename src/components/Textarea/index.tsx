import { Label } from '../Input';
import * as Styled from './index.styles';

interface TextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
  error?: string;
}

const Textarea = ({ label, htmlFor, error, ...restProps }: TextAreaProps) => {
  return (
    <div>
      <Label htmlFor={htmlFor}>{label}</Label>
      <Styled.Textarea {...restProps}></Styled.Textarea>
      {error && <Styled.ErrorMessage>{error}</Styled.ErrorMessage>}
    </div>
  );
};

export default Textarea;

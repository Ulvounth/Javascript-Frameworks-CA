import * as Styled from './index.styles';

const ErrorMessage = () => {
  return (
    <Styled.ErrorMessage>
      <div>
        <h2>An error occurred</h2>
        <p>Please try again later.</p>
      </div>
    </Styled.ErrorMessage>
  );
};

export default ErrorMessage;

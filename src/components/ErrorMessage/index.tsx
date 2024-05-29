import styled from 'styled-components';

const StyledErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #ff7e5f, #feb47b, #ff6b6b, #f7797d);
`;

const ErrorMessage = () => {
  return (
    <StyledErrorMessage>
      <div>
        <h2>An error occurred</h2>
        <p>Please try again later.</p>
      </div>
    </StyledErrorMessage>
  );
};

export default ErrorMessage;

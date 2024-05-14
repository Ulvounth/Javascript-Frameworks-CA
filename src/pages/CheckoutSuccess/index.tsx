import styled from 'styled-components';

const SuccessContainer = styled.div`
  text-align: center; // Center align the content
  padding-top: 50px; // Add some padding at the top
`;

const SuccessMessage = styled.h1`
  color: #4caf50; // A green color to indicate success
  margin-bottom: 20px; // Space below the message
`;

const CheckoutSuccessPage = () => {
  return (
    <SuccessContainer>
      <SuccessMessage>Your checkout was successful!</SuccessMessage>
      <p>Thank you for shopping with us.</p>
      <a href="/">Go back to the store</a>
    </SuccessContainer>
  );
};

export default CheckoutSuccessPage;

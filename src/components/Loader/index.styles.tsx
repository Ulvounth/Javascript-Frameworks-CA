import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Spinner = styled.div`
  border: 6px solid rgba(0, 0, 0, 0.1);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border-left-color: #000000;
  animation: spin 1s ease infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

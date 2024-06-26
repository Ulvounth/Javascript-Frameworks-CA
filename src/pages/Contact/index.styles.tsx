import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  background-image: linear-gradient(
    330deg,
    var(--bg-primary) 50%,
    var(--bg-secondary) 40%
  );
  min-height: 100vh;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2em;
  width: 100%;
  padding: 2em;
  max-width: 1440px;
  margin: auto;
  border-radius: 8px;
  @media screen and (max-width: 1005px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionInfo = styled.div`
  h1 {
    font-size: 2rem;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1em;
  }
`;

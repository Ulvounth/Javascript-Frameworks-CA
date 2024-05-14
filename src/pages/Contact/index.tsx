import styled from 'styled-components';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Form from '../../components/Form';

// Styled components

const StyledSection = styled.section`
  display: flex;
  background-image: linear-gradient(
    330deg,
    var(--bg-primary) 50%,
    var(--bg-secondary) 40%
  );
  min-height: 100vh;
`;

const Container = styled.div`
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

const SectionInfo = styled.div`
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

const Contact = () => {
  useDocumentTitle('Infinity Goods | Contact');
  return (
    <StyledSection>
      <Container>
        <SectionInfo>
          <h1>Contact</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ut nostrum odit iusto doloribus iure in iste maiores quis! Assumenda
            velit, rerum voluptatem enim ab accusamus? Officia dicta ad
            suscipit.
          </p>
          <img src="./images/call-center.png" alt="Contact us image" />
        </SectionInfo>
        <Form />
      </Container>
    </StyledSection>
  );
};

export default Contact;

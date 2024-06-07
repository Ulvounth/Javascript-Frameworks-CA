import * as Styled from './index.styles';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Form from '../../components/Form';

const Contact = () => {
  useDocumentTitle('Infinity Goods | Contact');
  return (
    <Styled.Section>
      <Styled.Container>
        <Styled.SectionInfo>
          <h1>Contact</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ut nostrum odit iusto doloribus iure in iste maiores quis! Assumenda
            velit, rerum voluptatem enim ab accusamus? Officia dicta ad
            suscipit.
          </p>
          <img src="./images/call-center.png" alt="Contact us image" />
        </Styled.SectionInfo>
        <Form />
      </Styled.Container>
    </Styled.Section>
  );
};

export default Contact;

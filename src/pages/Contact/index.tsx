import * as Styled from './index.styles';
import { Helmet } from 'react-helmet-async';
import Form from '../../components/Form';

const Contact = () => {
  return (
    <Styled.Section>
      <Helmet>
        <title>Infnity Goods | Contact</title>
        <meta
          name="description"
          content="Get in touch with Infinity Goods! Reach out to us for any questions about our products or services."
        />
      </Helmet>
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

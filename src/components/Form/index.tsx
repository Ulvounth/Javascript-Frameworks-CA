import { useState } from 'react';
import Input from '../Input';
import styled from 'styled-components';
import Textarea from '../Textarea/Textarea';

const Container = styled.div`
  width: 100%;
  max-width: 700px;
  margin: auto;
  background-color: var(--bg-primary);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 2em;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SubmitButton = styled.button`
  background-color: var(--bg-purple);
  color: white;
  font-size: 1rem;
  border: none;
  padding: 0.5em 2em;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: var(--bg-purple-dark);
  }
`;

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const Form = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    subject: '',
    email: '',
    message: '',
  });

  const [formValidation, setFormValidation] = useState({
    fullname: true,
    subject: true,
    email: true,
    message: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(validateEmail(formData.email));
    setFormValidation((prev) => {
      return {
        ...prev,
        fullname: formData.fullname.length > 3,
        email: validateEmail(formData.email),
      };
    });
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          label="Full Name"
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleInputChange}
          error={
            !formValidation.fullname ? 'Name must be over 3 characters' : ''
          }
          required
        />
        <Input
          label="Subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          error={
            !formValidation.subject ? 'Subject must be over 3 characters' : ''
          }
          required
        />
        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          error={!formValidation.email ? 'Email is invalid' : ''}
          placeholder="Ola@nordmann.com"
          required
        />
        <Textarea
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleTextareaChange}
          error={
            !formValidation.message ? 'Message must be over 3 characters' : ''
          }
          required
        />
        <SubmitButton type="submit">Send</SubmitButton>
      </StyledForm>
    </Container>
  );
};

export default Form;

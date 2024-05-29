import { useState } from 'react';
import Input from '../Input';
import styled from 'styled-components';
import Textarea from '../Textarea';
import {
  validateEmail,
  validateFullname,
  validateMessage,
  validateSubject,
} from '../../utils/validation';
import { useToast } from '../../context/ToastContext';

const Container = styled.div`
  width: 100%;
  max-width: 700px;
  margin: auto;
  background-color: var(--bg-tertiary);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 2em;
  color: white;
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

const Form = () => {
  const { showToast } = useToast();
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

  const canProceed = () => {
    return (
      validateSubject(formData.subject) &&
      validateFullname(formData.fullname) &&
      validateEmail(formData.email) &&
      validateMessage(formData.message)
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormValidation((prev) => {
      return {
        ...prev,
        subject: validateSubject(formData.subject),
        fullname: validateFullname(formData.fullname),
        email: validateEmail(formData.email),
        message: validateMessage(formData.message),
      };
    });

    if (canProceed()) {
      showToast('Form submitted successfully!', 'success');
      console.log(formData);
    } else {
      showToast('Please check your input and try again.', 'error');
    }
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

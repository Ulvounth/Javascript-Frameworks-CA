import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: var(--bg-tertiary);
  color: white;
  text-align: center;
`;

export const Footer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr;
  max-width: 1440px;
  margin: auto;
  padding: 2em;
  gap: 20px;
  justify-items: start;

  div:last-child {
    grid-column: 1 / -1; // Makes the last div take full width
    justify-self: center;
  }

  div:nth-child(3) {
    justify-self: end;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // All items in one column on smaller screens

    div:nth-child(3) {
      justify-self: start;
    }

    gap: 40px;
  }
`;

export const Img = styled.img`
  max-width: 250px;
  border-radius: 10%;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: start;
  justify-self: center;

  div.links {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
  }

  @media (max-width: 768px) {
    justify-self: start;
  }
`;

export const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: #007bff;
  }

  i {
    font-size: 2.4rem;
    &:hover {
      color: #007bff;
    }
  }
`;

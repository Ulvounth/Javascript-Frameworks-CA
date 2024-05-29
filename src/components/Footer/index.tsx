import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: var(--bg-tertiary);
  color: white;
  text-align: center;
`;

const StyledFooter = styled.div`
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

const StyledImg = styled.img`
  max-width: 250px;
  border-radius: 10%;
`;

const StyledDiv = styled.div`
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

const FooterLink = styled.a`
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

function Footer() {
  return (
    <FooterWrapper>
      <StyledFooter>
        <div>
          <a href="/">
            <StyledImg src="./images/infinity-goods.png" alt="logo" />
          </a>
        </div>
        <StyledDiv>
          <h2>Links</h2>
          <FooterLink aria-label="To home page" href="/">
            Home
          </FooterLink>
          <FooterLink aria-label="To contact page" href="/contact">
            Contact
          </FooterLink>
          <FooterLink aria-label="To cart page" href="/checkout">
            Cart
          </FooterLink>
        </StyledDiv>
        <StyledDiv>
          <h2>Follow Us</h2>
          <div className="links">
            <FooterLink href="https://www.facebook.com/">
              <i className="fa-brands fa-facebook"></i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/">
              <i className="fa-brands fa-instagram"></i>
            </FooterLink>
            <FooterLink href="https://www.twitter.com/">
              <i className="fa-brands fa-twitter"></i>
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/">
              <i className="fa-brands fa-linkedin"></i>
            </FooterLink>
          </div>
        </StyledDiv>
        <div>Copyright © 2024 Andreas Ulvund</div>
      </StyledFooter>
    </FooterWrapper>
  );
}

export default Footer;

import * as Styled from './index.styles';

function Footer() {
  return (
    <Styled.FooterWrapper>
      <Styled.Footer>
        <div>
          <a href="/">
            <Styled.Img src="./images/infinity-goods.png" alt="logo" />
          </a>
        </div>
        <Styled.Div>
          <h2>Links</h2>
          <Styled.FooterLink aria-label="To home page" href="/">
            Home
          </Styled.FooterLink>
          <Styled.FooterLink aria-label="To contact page" href="/contact">
            Contact
          </Styled.FooterLink>
          <Styled.FooterLink aria-label="To cart page" href="/checkout">
            Cart
          </Styled.FooterLink>
        </Styled.Div>
        <Styled.Div>
          <h2>Follow Us</h2>
          <div className="links">
            <Styled.FooterLink href="https://www.facebook.com/">
              <i className="fa-brands fa-facebook"></i>
            </Styled.FooterLink>
            <Styled.FooterLink href="https://www.instagram.com/">
              <i className="fa-brands fa-instagram"></i>
            </Styled.FooterLink>
            <Styled.FooterLink href="https://www.twitter.com/">
              <i className="fa-brands fa-twitter"></i>
            </Styled.FooterLink>
            <Styled.FooterLink href="https://www.linkedin.com/">
              <i className="fa-brands fa-linkedin"></i>
            </Styled.FooterLink>
          </div>
        </Styled.Div>
        <div>Copyright © 2024 Andreas Ulvund</div>
      </Styled.Footer>
    </Styled.FooterWrapper>
  );
}

export default Footer;

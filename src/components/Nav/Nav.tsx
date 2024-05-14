import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CartIcon, Logo } from '../Icons';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import SearchProductInput from '../SearchProductInput/SearchProductInput';
import { ProductsContext } from '../../context/ProductsContext';

const StyledNav = styled.nav`
  padding: 1em 2em;
  max-width: 1440px;
  margin: 0 auto;

  > .nav__list {
    display: flex;
    gap: 1em;
    list-style: none;
    padding: 0;
    margin: 0;
    color: white;
    align-items: center;

    a {
      color: white;
      text-decoration: none;
    }

    li:first-of-type {
      margin-right: auto;
    }
  }
`;

const Nav = () => {
  const cart = useContext(CartContext);
  const products = useContext(ProductsContext);

  return (
    <StyledNav className="nav">
      <ul className="nav__list">
        <li>
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li>
          <SearchProductInput products={products} />
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/checkout">
            <CartIcon items={cart?.length} />
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;

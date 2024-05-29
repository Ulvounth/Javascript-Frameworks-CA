import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CartIcon, Logo } from '../Icons';
import { CartContext } from '../../context/CartContext';
import { useContext, useState } from 'react';
import SearchProductInput from '../SearchProductInput/SearchProductInput';
import { ProductsContext } from '../../context/ProductsContext';

const StyledNav = styled.nav`
  padding: 1em 2em;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav__list.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--bg-tertiary);
  }

  > .nav__list {
    display: flex;
    gap: 1em;
    list-style: none;
    padding: 0;
    margin: 0;
    color: white;
    align-items: center;
    flex-grow: 1;

    a {
      color: white;
      text-decoration: none;
    }

    li:first-of-type {
      margin-left: auto;
    }

    @media (max-width: 768px) {
      display: none;

      li:first-of-type {
        margin-left: 0;
      }
    }
  }

  .nav__toggle {
    display: none;
    cursor: pointer;
    color: white;
    @media (max-width: 768px) {
      display: block;
      font-size: 1.5rem;
    }
  }
`;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useContext(CartContext);
  const products = useContext(ProductsContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledNav className="nav">
      <Link to="/">
        <Logo />
      </Link>
      <i className="fas fa-bars nav__toggle" onClick={toggleMenu}></i>
      <ul className={`nav__list ${isOpen ? 'active' : ''}`}>
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

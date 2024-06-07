import { Link } from 'react-router-dom';
import * as Styled from './index.styles';
import { CartIcon, Logo } from '../Icons';
import { CartContext } from '../../context/CartContext';
import { useContext, useState } from 'react';
import SearchProductInput from '../SearchProductInput';
import { ProductsContext } from '../../context/ProductsContext';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useContext(CartContext);
  const products = useContext(ProductsContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Styled.Nav className="nav">
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
    </Styled.Nav>
  );
};

export default Nav;

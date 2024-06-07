import * as Styled from './index.styles';
import { ShoppingBagIcon } from '../../components/Icons';
import Products from '../Products';
import Hero from '../../components/Hero';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';

const Home = () => {
  useDocumentTitle('Infinity Goods | Home');

  const products = useContext(ProductsContext);

  return (
    <>
      <Hero />
      <Styled.Section>
        <Styled.Home>
          <div>
            <h2>Welcome to Infnity Goods!</h2>
            <p>
              Step into the season with our hottest deals yet! From stylish
              outfits to cool gadgets, find everything you need to make your
              summer unforgettable. Don't miss out—explore our exclusive
              discounts and special offers today!
            </p>
          </div>
          <Styled.ShoppingBagIconWrapper>
            <ShoppingBagIcon />
          </Styled.ShoppingBagIconWrapper>
        </Styled.Home>
        <Products products={products} />
      </Styled.Section>
    </>
  );
};

export default Home;

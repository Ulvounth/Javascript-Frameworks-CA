import { useState, useEffect } from 'react';
import Input from '../Input';
import { Link } from 'react-router-dom';
import { TProduct } from '../../pages/Products';
import styled from 'styled-components';

type SearchProductInputProps = {
  products: TProduct[] | null;
};

const StyledSearchProductInputWrapper = styled.div`
  position: relative;
`;

const StyledSearchProductInputList = styled.ul`
  position: absolute;
  background-color: white;
  color: black;
  list-style: none;

  > .filtered-products__list-item {
    display: grid;
    grid-template-columns: auto 1fr;

    a {
      display: inline-block;
      width: 100%;
      padding: 1em;
      color: black !important;

      &:hover {
        background-color: var(--bg-secondary);
      }
    }
  }
`;

const StyledImage = styled.img`
  object-fit: cover;
  aspect-ratio: 1/1;
`;

const SearchProductInput = ({ products }: SearchProductInputProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState<
    TProduct[] | undefined
  >([]);

  useEffect(() => {
    if (searchTerm !== '') {
      const filteredData = products?.filter((product: TProduct) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredResults(filteredData);
    } else {
      setFilteredResults([]);
    }
  }, [searchTerm, products]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  console.log(filteredResults);

  return (
    <StyledSearchProductInputWrapper className="filtered-products">
      <Input
        type="text"
        value={searchTerm}
        onChange={handleOnChange}
        placeholder="Search products..."
      />
      {filteredResults && filteredResults.length > 0 && (
        <StyledSearchProductInputList>
          {filteredResults?.map((product) => (
            <li className="filtered-products__list-item" key={product.id}>
              <StyledImage src={product.imageUrl} alt={product.title} />
              <Link to={`/product/${product.id}`}>{product.title}</Link>
            </li>
          ))}
        </StyledSearchProductInputList>
      )}
    </StyledSearchProductInputWrapper>
  );
};

export default SearchProductInput;

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
  width: 20em;
`;

const StyledSearchProductInputList = styled.ul`
  position: absolute;
  background-color: white;
  list-style: none;
  margin-top: 10px;
  width: 100%;
  max-height: 500px;
  overflow-y: auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  > .filtered-products__list-item {
    border-bottom: 1px solid var(--bg-secondary);

    a {
      display: grid;
      width: 100%;
      padding: 20px;
      color: black !important;
      text-decoration: none;

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

const StyledSpan = styled.span`
  padding-top: 10px;
  font-size: 1.3em;
  font-weight: 500;
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
              <Link to={`/product/${product.id}`}>
                <StyledImage src={product.imageUrl} alt={product.title} />
                <StyledSpan>{product.title}</StyledSpan>
              </Link>
            </li>
          ))}
        </StyledSearchProductInputList>
      )}
    </StyledSearchProductInputWrapper>
  );
};

export default SearchProductInput;

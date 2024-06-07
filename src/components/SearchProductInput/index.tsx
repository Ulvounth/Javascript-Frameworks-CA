import { useState, useEffect } from 'react';
import Input from '../Input';
import { Link } from 'react-router-dom';
import { TProduct } from '../../pages/Products';
import * as Styled from './index.styles';

type SearchProductInputProps = {
  products: TProduct[] | null;
};

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
    <Styled.SearchProductInputWrapper className="filtered-products">
      <Input
        type="text"
        value={searchTerm}
        onChange={handleOnChange}
        placeholder="Search products..."
      />
      {filteredResults && filteredResults.length > 0 && (
        <Styled.SearchProductInputList>
          {filteredResults?.map((product) => (
            <li className="filtered-products__list-item" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <Styled.Image src={product.imageUrl} alt={product.title} />
                <Styled.Span>{product.title}</Styled.Span>
              </Link>
            </li>
          ))}
        </Styled.SearchProductInputList>
      )}
    </Styled.SearchProductInputWrapper>
  );
};

export default SearchProductInput;

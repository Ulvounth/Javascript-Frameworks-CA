import styled from 'styled-components';

export const SearchProductInputWrapper = styled.div`
  position: relative;
  width: 20em;
`;

export const SearchProductInputList = styled.ul`
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

export const Image = styled.img`
  object-fit: cover;
  aspect-ratio: 1/1;
`;

export const Span = styled.span`
  padding-top: 10px;
  font-size: 1.3em;
  font-weight: 500;
`;

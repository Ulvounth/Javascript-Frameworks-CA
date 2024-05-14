import styled from 'styled-components';
import Nav from '../Nav/Nav';

const BaseHeader = styled.header`
  background: var(--bg-tertiary);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Header = () => {
  return (
    <BaseHeader>
      <Nav />
    </BaseHeader>
  );
};

export default Header;

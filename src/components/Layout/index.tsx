import styled from 'styled-components';
import Footer from '../Footer';
import Header from '../Header';
import { Outlet } from 'react-router-dom';

const MainContent = styled.main``;

const StyledOutlet = styled(Outlet)`
  max-width: 1440px;
  margin: 0 auto;
`;

const Layout = () => {
  return (
    <>
      <Header />
      <MainContent>
        <StyledOutlet />
      </MainContent>
      <Footer />
    </>
  );
};

export default Layout;

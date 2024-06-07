import * as Styled from './index.styles';
import Footer from '../Footer';
import Header from '../Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Styled.MainContent>
        <Styled.AppOutlet />
      </Styled.MainContent>
      <Footer />
    </>
  );
};

export default Layout;

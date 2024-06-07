import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

export const MainContent = styled.main``;

export const AppOutlet = styled(Outlet)`
  max-width: 1440px;
  margin: 0 auto;
`;

import styled from 'styled-components';

const StyledHero = styled.section`
  position: relative;
  background-image: linear-gradient(
    194deg,
    var(--bg-primary) 60%,
    var(--bg-secondary) 40%
  );
  min-height: calc(100vh + 81.44px);
`;

const Hero = () => {
  return <StyledHero />;
};

export default Hero;

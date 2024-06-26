import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 1em 2em;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1005px) {
    padding: 1em 1em;
  }

  .nav__list.active {
    display: flex;
    flex-direction: column-reverse;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--bg-tertiary);
    padding-bottom: 2em;
  }

  > .nav__list {
    display: flex;
    gap: 1em;
    list-style: none;
    padding: 0;
    margin: 0;
    color: white;
    align-items: center;
    flex-grow: 1;

    a {
      color: white;
      text-decoration: none;
    }

    li:first-of-type {
      margin-left: auto;
    }

    @media (max-width: 768px) {
      display: none;

      li:first-of-type {
        margin-left: 0;
      }
    }
  }

  .nav__toggle {
    display: none;
    cursor: pointer;
    color: white;
    @media (max-width: 768px) {
      display: block;
      font-size: 1.5rem;
    }
  }
`;

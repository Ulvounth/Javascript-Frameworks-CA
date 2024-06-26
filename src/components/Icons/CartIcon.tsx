import styled from 'styled-components';

const StyledCartIcon = styled.div`
  position: relative;
  span {
    display: flex;
    justify-content: center;
    alight-items: center;
    position: absolute;
    top: -5px;
    right: -5px;
    width: 15px;
    height: 15px;
    border-radius: 50px;
    background-color: lightblue;
    color: black;
    font-size: 10px;
  }
`;

type CartIconProps = {
  items?: number;
};

const CartIcon = ({ items = 0 }: CartIconProps) => {
  return (
    <StyledCartIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="32"
        viewBox="0 -960 960 960"
        width="32"
        fill="white"
      >
        <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
      </svg>
      <span>{items}</span>
    </StyledCartIcon>
  );
};

export default CartIcon;

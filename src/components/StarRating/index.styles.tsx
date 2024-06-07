import styled from 'styled-components';

export const StarsContainer = styled.div`
  display: inline-block;
`;

export const Star = styled.span`
  position: relative;
  display: inline-block;
  color: gold;
  font-size: 20px;
  line-height: 1;

  // Adjust empty and half star colors if necessary
  &.empty,
  &.half {
    color: #ccc;
  }
`;

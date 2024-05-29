import styled from 'styled-components';

const StyledTag = styled.span`
  background-color: rgba(252, 159, 44, 0.8);
  color: white;
  border-radius: 50px;
  padding: 0.5em;
  box-shadow: 1px 1px 1px #a9a9a9;
  min-width: 4em;
  text-align: center;
`;

type TagProps = {
  tag: string;
};

const Tag = ({ tag }: TagProps) => {
  return <StyledTag>{tag}</StyledTag>;
};

export default Tag;

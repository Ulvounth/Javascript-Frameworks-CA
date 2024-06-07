import * as Styled from './index.styles';

type TagProps = {
  tag: string;
};

const Tag = ({ tag }: TagProps) => {
  return <Styled.Tag>{tag}</Styled.Tag>;
};

export default Tag;

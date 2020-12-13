import { Div } from 'tags';

export const DateTitle = (children = [], props = {}) => {
  return Div(
    [...children, Div(['소비'], { style: SubTitleStyle }), Div(['섭취'], { style: SubTitleStyle })],
    {
      ...props,
      class: `date-title ${props.class && props.class}`,
      style: `${Style} ${props.style && props.style}`,
    }
  );
};

const Style = `
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  padding: .5rem 1rem;
  background: #36cfc9;
  color: #fff;
  font-weight: 600;
`;

const SubTitleStyle = `
  text-align: center;
`;

import { Div } from 'tags';

export const Header = (children = [], props = {}) => {
  return Div(children, {
    ...props,
    classname: `header ${props.classname && props.classname}`,
    style: `${Style} ${props.style && props.style}`,
  });
};

const Style = `
  color: red;
`;

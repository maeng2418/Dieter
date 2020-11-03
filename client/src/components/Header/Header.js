import { H1 } from 'tags';

export const Header = (children = [], props = {}) => {
  return H1(children, {
    ...props,
    classname: `header ${props.classname && props.classname}`,
    style: `${Style} ${props.style && props.style}`,
  });
};

const Style = `
  color: red;
`;

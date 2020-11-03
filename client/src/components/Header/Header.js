import { H1 } from 'tags';

export const Header = (children = [], props = {}) => {
  return H1(children, {
    ...props,
    class: `header ${props.class && props.class}`,
    style: `${Style} ${props.style && props.style}`,
  });
};

const Style = `
  color: red;
`;

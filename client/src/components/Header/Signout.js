import { Div } from 'tags';

export const Signout = (children = [], props = {}) => {
  return Div(children, {
    ...props,
    class: `signout ${props.class && props.class}`,
    style: `${Style} ${props.style && props.style}`,
  });
};

const Style = `
  position: absolute;
  right: 0;
  margin-right: 2rem;
  font-size: 1.2rem;
`;

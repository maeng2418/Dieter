import { Div } from 'tags';
import { NavButton } from './NavButton';

export const Navigator = (children = [], props = {}) => {
  return Div(children, {
    ...props,
    class: `navigator ${props.class && props.class}`,
    style: `${Style} ${props.style && props.style}`,
  });
};

const Style = `
  text-align: center;
  width: 50%;
  margin: auto;
`;

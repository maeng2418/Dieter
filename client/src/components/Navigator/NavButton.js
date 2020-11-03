import { Button } from 'tags';

export const NavButton = (children = [], props = {}) => {
  return Button(children, {
    ...props,
    class: `nav-btn ${props.class && props.class}`,
    style: `${Style} ${props.style && props.style}`,
  });
};

const Style = `
  text-align: center;
`;

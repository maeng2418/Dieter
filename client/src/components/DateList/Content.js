import { Div } from 'tags';

export const Content = (children = [], props = {}) => {
  return Div(children, {
    ...props,
    class: `content ${props.class && props.class}`,
    style: `${Style} ${props.style && props.style}`,
  });
};

const Style = `
  margin: right: auto;
`;

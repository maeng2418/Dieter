import { Div } from 'tags';

export const Row = (children = [], props = {}) => {
  return Div(children, {
    ...props,
    class: `row ${props.class && props.class}`,
    style: `${Style} ${props.style && props.style}`,
  });
};

const Style = `
  display: flex;
  justify-content: space-between;
`;

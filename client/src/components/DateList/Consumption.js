import { Div } from 'tags';

export const Consumption = (children = [], props = {}) => {
  return Div(['-', ...children, 'kcal'], {
    ...props,
    class: `consumption ${props.class && props.class}`,
    style: `${Style} ${props.style && props.style}`,
  });
};

const Style = `
  text-align: right;
  color: blue;
`;

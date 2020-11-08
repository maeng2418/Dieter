import { Div } from 'tags';

export const Intake = (children = [], props = {}) => {
  return Div(['+', ...children, 'kcal'], {
    ...props,
    class: `intake ${props.class && props.class}`,
    style: `${Style} ${props.style && props.style}`,
  });
};

const Style = `
  text-align: right;
  color: red;
`;

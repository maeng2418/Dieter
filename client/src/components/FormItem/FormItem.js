import { Div, Label } from 'tags';

export const FormItem = (children = [], props = {}) => {
  return Div(
    [
      Label([children.shift(0)], {
        style: 'min-width: 18%; display: inline-block; font-weight: 600;',
      }),
      ...children,
    ],
    {
      ...props,
      class: `form-item ${props.class && props.class}`,
      style: `${Style} ${props.style && props.style}`,
    }
  );
};

const Style = `
  width: 50%;
  margin: .5rem 0;
`;

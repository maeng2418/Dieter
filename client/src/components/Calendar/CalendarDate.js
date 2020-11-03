import { Div } from 'tags';

export const CalendarDate = (children = [], props = {}) => {
  return Div(children, {
    ...props,
    class: `calendar-date ${props.class && props.class}`,
    style: `${Style} ${props.style && props.style}`,
  });
};

const Style = `
  width: 8rem;
  height: 8rem;
  border: 1px solid black;
`;

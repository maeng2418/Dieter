import { Div } from 'tags';

export const CalendarDay = (children = [], props = {}) => {
  return Div(children, {
    ...props,
    class: `calendar-day ${props.class && props.class}`,
    style: `${Style} ${props.style && props.style}`,
  });
};

const Style = `
  width: 8rem;
  border: 1px solid black;
  text-align: center;
`;

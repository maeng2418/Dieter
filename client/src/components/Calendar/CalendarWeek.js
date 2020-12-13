import { Div } from 'tags';

export const CalendarWeek = (children = [], props = {}) => {
  return Div(children, {
    ...props,
    class: `calendar-week ${props.class && props.class}`,
    style: `${Style} ${props.style && props.style}`,
  });
};

const Style = `
  display: flex;
`;

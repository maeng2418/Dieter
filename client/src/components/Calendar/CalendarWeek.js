import { Div } from 'tags';

export const CalendarWeek = (children = [], props = {}) => {
  return Div(children, {
    ...props,
    classname: `calendar-week ${props.classname && props.classname}`,
    style: `${Style} ${props.style && props.style}`,
  });
};

const Style = `
  display: flex;
`;

import { Div } from 'tags';

export const CalendarDate = (children = [], props = {}) => {
  return Div(children, {
    ...props,
    classname: `calendar-date ${props.classname && props.classname}`,
    style: `${Style} ${props.style && props.style}`,
  });
};

const Style = `
  width: 8rem;
  height: 8rem;
  border: 1px solid black;
`;

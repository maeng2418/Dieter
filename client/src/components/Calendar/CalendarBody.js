import { Div } from 'tags';
import { CalendarDays } from './CalendarDays';

export const CalendarBody = (children = [], props = {}) => {
  return Div(
    [
      Div([CalendarDays(), Div([...children], { classname: 'calendar-dates' })], {
        classname: 'calendar-body',
      }),
    ],
    {
      ...props,
      classname: `calendar-body ${props.classname && props.classname}`,
      style: `${Style} ${props.style && props.style}`,
    }
  );
};

const Style = `
  display: flex;
  border: 1px solid black;
  object-fit: contain;
  margin: auto;
`;

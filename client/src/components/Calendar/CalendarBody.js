import { Div } from 'tags';
import { CalendarDays } from './CalendarDays';

export const CalendarBody = (children = [], props = {}) => {
  return Div(
    [
      Div([CalendarDays(), Div([...children], { class: 'calendar-dates' })], {
        class: 'calendar-body',
      }),
    ],
    {
      ...props,
      class: `calendar-body ${props.class && props.class}`,
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

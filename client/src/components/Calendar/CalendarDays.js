import { Div } from 'tags';
import { CalendarDay } from './CalendarDay';

export const CalendarDays = (children = [], props = {}) => {
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  return Div([days.map((day) => CalendarDay([day])).join('')], {
    ...props,
    class: `calendar-days ${props.class && props.class}`,
    style: `${Style} ${props.style && props.style}`,
  });
};

const Style = `
  display: flex;
`;

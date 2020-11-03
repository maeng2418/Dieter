import { Div } from 'tags';
import { CalendarDay } from './CalendarDay';

export const CalendarDays = (children = [], props = {}) => {
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  return Div([days.map((day) => CalendarDay([day])).join('')], {
    ...props,
    classname: `calendar-days ${props.classname && props.classname}`,
    style: `${Style} ${props.style && props.style}`,
  });
};

const Style = `
  display: flex;
`;

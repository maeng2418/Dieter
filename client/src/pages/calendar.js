import { Div } from 'tags';
import { Calendar } from 'components';

const CalendarPage = () => {
  return Div([Calendar()], {
    classname: 'calendar-page',
    id: 'calendar-page',
  });
};

export default CalendarPage;

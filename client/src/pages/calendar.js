import { Div } from 'tags';
import { Calendar } from 'components';

const CalendarPage = () => {
  return Div([Calendar()], {
    class: 'calendar-page',
  });
};

export default CalendarPage;

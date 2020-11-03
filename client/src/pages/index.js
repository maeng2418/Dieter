import { Layout } from 'components';
import Main from './main';
import CalendarPage from './calendar';

// 라우팅 처리
const App = () => {
  return Layout([CalendarPage()]);
};

export default App;

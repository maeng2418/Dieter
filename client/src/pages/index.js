import { Layout } from 'components';
import MainPage from './main';
import onEventHandler from '../event-controller';
import { setEvent, setState } from '../store';

const event = (data) => {
  console.log(data);
};

const App = () => {
  setState('date', new Date());
  setEvent('date', event);
  onEventHandler();
  return Layout([MainPage()]);
};

export default App;

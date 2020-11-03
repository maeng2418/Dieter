import { Layout } from 'components';
import MainPage from './main';
import onEventHandler from '../event-controller';
import { setState, setEvent } from '../store';
import { onStoreDateHandler } from '../store/event-handler';

const App = () => {
  setState('date', new Date());
  setEvent('date', onStoreDateHandler);
  onEventHandler();
  return Layout([MainPage()]);
};

export default App;

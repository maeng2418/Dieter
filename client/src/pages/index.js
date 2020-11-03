import { Layout } from 'components';
import MainPage from './main';
import onEventHandler from '../event-handler';
import { setState, setEvent } from '../store';
import { onStoreDateHandler } from '../event-handler/store-event';

const App = () => {
  setState('date', new Date());
  setEvent('date', onStoreDateHandler);
  onEventHandler();
  return Layout([MainPage()]);
};

export default App;

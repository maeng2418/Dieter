import { Layout } from 'components';
import MainPage from './main';
import onEventHandler from '../event-controller';

const App = () => {
  onEventHandler();
  return Layout([MainPage()]);
};

export default App;

import { Layout } from 'components';
import MainPage from './main';
import LoginPage from './login';
import onEventHandler from '../event-handler';
import { setState, setEvent } from '../store';
import { onStoreDateHandler } from '../event-handler/store-event';

const App = () => {
  setState('date', new Date());
  setEvent('date', onStoreDateHandler);
  onEventHandler();
  // 쿠키 체크해서 없으면 로그인으로 라우팅
  const cookieValue = document.cookie.match('(^|;) ?authorization=([^;]*)(;|$)');
  if (cookieValue) {
    return cookieValue[2] && Layout([MainPage()]);
  } else {
    return Layout([LoginPage()]);
  }
};

export default App;

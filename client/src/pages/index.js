import { Layout } from 'components';
import Main from './main';

// 라우팅 처리
const App = () => {
  return Layout([Main()]);
};

export default App;

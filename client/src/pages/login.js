import { Div } from 'tags';
import { LoginForm } from 'components';

const LoginPage = () => {
  return Div([LoginForm()], {
    class: 'login-page',
  });
};

export default LoginPage;

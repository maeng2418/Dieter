import { Div } from 'tags';
import { SignUpForm } from 'components';

const SignUpPage = () => {
  return Div([SignUpForm()], {
    class: 'signup-page',
  });
};

export default SignUpPage;

import { Div } from 'tags';
import { RegisterForm, DateList } from 'components';

const MainPage = () => {
  return Div(
    [
      RegisterForm(),
      DateList([], {
        type: 'intake',
        category: '중식',
        kcal: 500,
        content: '짬뽕',
        date: '2020-11-08',
      }),
    ],
    {
      class: 'main-page',
    }
  );
};

export default MainPage;

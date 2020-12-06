import { Div, Button } from 'tags';
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
      Button(['GET 버튼'], { class: 'get-btn' }),
    ],
    {
      class: 'main-page',
    }
  );
};

export default MainPage;

import { Div } from 'tags';
import { RegisterForm, DateList } from 'components';
import API from 'utils/api';

const MainPage = () => {
  return Div([RegisterForm()], {
    class: 'main-page',
  });
};

const onLoadData = async () => {
  const response = await API.get(`/kcals`);
  if (response.data.result.success) {
    return response.data.result.kcals.reduce(
      (acc, cur) =>
        acc +
        DateList([], {
          type: cur.type,
          category: cur.category,
          kcal: cur.kcal,
          content: cur.content,
          date: cur.date,
        }),
      ''
    );
  } else {
    return '';
  }
};

export default MainPage;

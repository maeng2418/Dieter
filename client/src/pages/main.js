import { Div } from 'tags';
import { RegisterForm, DateList, KcalList } from 'components';
import { getState } from '../store';
import { dateDescending } from 'utils/date-sorting';

const MainPage = () => {
  const DataLists = createDateList();
  return Div([RegisterForm(), DataLists], {
    class: 'main-page',
  });
};

const createDateList = () => {
  const sortedKcalData = getState('kcalData')
    .sort(dateDescending)
    .reduce((acc, cur) => {
      if (acc.hasOwnProperty(cur.date)) {
        const newArr = [...acc[cur.date], cur];
        acc[cur.date] = newArr;
        return acc;
      } else {
        const newArr = [cur];
        acc[cur.date] = newArr;
        return acc;
      }
    }, {});
  let result = '';
  for (let date in sortedKcalData) {
    let first = sortedKcalData[date].shift();
    result += DateList(
      [
        sortedKcalData[date].reduce(
          (acc, cur) => acc + KcalList([cur.content, cur.kcal], { type: cur.type }),
          ''
        ),
      ],
      {
        type: first.type,
        category: first.category,
        kcal: first.kcal,
        content: first.content,
        date: first.date,
      }
    );
  }
  return result;
};

export default MainPage;

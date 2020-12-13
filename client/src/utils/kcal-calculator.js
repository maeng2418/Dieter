import { getState, getDate } from 'store';
import { dateDescending } from 'utils/date-sorting';

export const getDayKcal = () => {
  const sortedKcalData = getState('kcalData')
    .sort(dateDescending)
    .reduce((acc, cur) => {
      if (acc.hasOwnProperty(cur.date)) {
        if (cur.type === 'intake') {
          const kcal = acc[cur.date] + cur.kcal;
          acc[cur.date] = kcal;
          return acc;
        } else {
          const kcal = acc[cur.date] - cur.kcal;
          acc[cur.date] = kcal;
          return acc;
        }
      } else {
        if (cur.type === 'intake') {
          const kcal = cur.kcal;
          acc[cur.date] = kcal;
          return acc;
        } else {
          const kcal = -cur.kcal;
          acc[cur.date] = kcal;
          return acc;
        }
      }
    }, {});
  return sortedKcalData;
};

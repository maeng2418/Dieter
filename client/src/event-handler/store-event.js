import { Div, KcalList, RegisterForm, Calendar, DateList } from 'components';
import { dateDescending } from 'utils/date-sorting';

export const onStoreDateHandler = (date) => {
  document.querySelector('.current-year-month').innerHTML = `
    ${date.getFullYear()}년 ${date.getMonth() + 1}월
  `;
  if (location.hash === '#calendar') {
    document.querySelector('.calendar-page').innerHTML = Calendar();
  }
};

export const onStoreLoadDataHandler = (data) => {
  if (location.hash === '#main') {
    window.location.reload();
  } else if (location.hash === '#calendar') {
    // document.querySelector('.content');
  }
};

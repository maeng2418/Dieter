import { Calendar } from 'components';

export const onStoreDateHandler = (date) => {
  document.querySelector('.current-year-month').innerHTML = `
    ${date.getFullYear()}년 ${date.getMonth() + 1}월
  `;
  if (location.hash === '#calendar') {
    document.querySelector('.calendar-page').innerHTML = Calendar();
  }
};

export const onStoreLoadDataHandler = (data) => {
  window.location.reload();
};

import MainPage from 'pages/main';
import CalendarPage from 'pages/calendar';
import { getState, setState, setEvent } from '../store';

// 네이비게이션 이벤트 핸들러
const onNavEventHandler = (page) => {
  window.history.pushState({ page }, null, `#${page}`);
  const statePage = window.history.state.page;
  if (statePage === 'main') {
    document.querySelector('.content').innerHTML = MainPage();
  } else if (statePage === 'calendar') {
    document.querySelector('.content').innerHTML = CalendarPage();
  }
};

const onChangeDateHandler = (prevNext) => {
  let month = getState('date').getMonth();
  let year = getState('date').getFullYear();
  if (prevNext === 'prev-btn') {
    month -= 1;
    if (month < 0) {
      month = 11;
      year -= 1;
    }
  } else if (prevNext === 'next-btn') {
    month += 1;
    if (month > 11) {
      month = 0;
      year += 1;
    }
  }
  setState('date', new Date(year, month, 1));
};

const onEventHandler = () => {
  document.getElementById('root').addEventListener('click', async (e) => {
    e.preventDefault();
    if (e.target.closest(`.nav-btn`)) {
      onNavEventHandler(e.target.id);
    } else if (e.target.closest('.month-nav-btn')) {
      onChangeDateHandler(e.target.id);
    }
  });
};

export default onEventHandler;

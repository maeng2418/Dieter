import MainPage from 'pages/main';
import CalendarPage from 'pages/calendar';

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

const onEventHandler = () => {
  document.getElementById('root').addEventListener('click', async (e) => {
    e.preventDefault();
    if (e.target.closest(`.nav-btn`)) {
      onNavEventHandler(e.target.id);
    }
  });
};

export default onEventHandler;

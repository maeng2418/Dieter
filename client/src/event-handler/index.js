import MainPage from 'pages/main';
import CalendarPage from 'pages/calendar';
import GraphPage from 'pages/graph';
import LoginPage from 'pages/login';
import { Option } from 'tags';
import { DateList, KcalList, Layout } from 'components';
import { getState, setState, setEvent } from 'store';
import API from 'utils/api';

// 네이비게이션 이벤트 핸들러
const onNavEventHandler = async (page) => {
  window.history.pushState({ page }, null, `#${page}`);
  const statePage = window.history.state.page;
  const $currentNav = document.querySelector('.selected-page');
  const $newNav = document.getElementById(page);
  if (statePage === 'main') {
    document.querySelector('.content').innerHTML = MainPage();
  } else if (statePage === 'calendar') {
    document.querySelector('.content').innerHTML = CalendarPage();
  } else if (statePage === 'graph') {
    document.querySelector('.content').innerHTML = GraphPage();
  } else if (statePage === 'login') {
    document.querySelector('.content').innerHTML = LoginPage();
  }
  $currentNav.style.background = '#36cfc9';
  $currentNav.style.color = '#fff';
  $newNav.style.background = '#fff';
  $newNav.style.color = '#36cfc9';
  $currentNav.classList.remove('selected-page');
  $newNav.classList.add('selected-page');
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

const onSelectTypeHandler = (classList) => {
  const $intake = document.querySelector('.intake-btn');
  const $consumption = document.querySelector('.consumption-btn');
  const $category = document.querySelector('.category');
  const SelectStyle =
    'height: 2rem; width: 5rem; outline: none; color: #36cfc9; background: #fff; border: 2px solid #36cfc9;';
  const UnselectStyle =
    'height: 2rem; width: 5rem; outline: none; background: #36cfc9; color: #fff; border: 2px solid #36cfc9;';
  if (classList.contains('intake-btn')) {
    $intake.setAttribute('style', SelectStyle);
    $consumption.setAttribute('style', UnselectStyle);
    $intake.classList.toggle('isSelected');
    $consumption.classList.toggle('isSelected');
    $category.innerHTML = Option(['한식']) + Option(['중식']) + Option(['일식']);
  } else {
    $intake.setAttribute('style', UnselectStyle);
    $consumption.setAttribute('style', SelectStyle);
    $intake.classList.toggle('isSelected');
    $consumption.classList.toggle('isSelected');
    $category.innerHTML = Option(['유산소 운동']) + Option(['근력 운동']);
  }
};

const onSubmitHandler = async () => {
  const type = document.querySelector('.isSelected').id;
  const category = document.querySelector('.category').value;
  const date = document.querySelector('.date-picker').value;
  const content = document.querySelector('.input-content').value;
  const kcal = document.querySelector('.input-kcal').value;

  const response = await API.post(`/kcals`, {
    type: type,
    date: date,
    category: category,
    kcal: parseInt(kcal),
    content: content,
  });

  if (response.data.result.success) {
    setState('kcalData', [...getState('kcalData'), response.data.result.kcal]);
  } else {
    alert('칼로리 등록에 실패하였습니다.');
  }
};

const onLoginHandler = async () => {
  const email = document.querySelector('.input-id').value;
  const password = document.querySelector('.input-pw').value;
  const data = { email, password };
  const response = await API.post(`/users/email`, data);
  if (response.data.result.success) {
    const result = await onLoadDataHandler();
    setState('kcalData', result);
    const $app = document.querySelector('.app');
    $app.innerHTML = Layout([MainPage()]);
  } else {
    alert('로그인에 실패하였습니다.');
  }
};

export const onLoadDataHandler = async () => {
  const response = await API.get(`/kcals`);
  if (response.data.result.success) {
    return response.data.result.kcals;
  }
  return [];
};

const onSignOutHandler = () => {
  document.cookie = 'authorization=; expires=Thu, 01 Jan 1999 00:00:10 GMT; path=/ ';
  window.location.reload();
};

const onEventHandler = () => {
  document.getElementById('root').addEventListener('click', async (e) => {
    e.preventDefault();
    if (e.target.closest(`.nav-btn`)) {
      onNavEventHandler(e.target.id);
    } else if (e.target.closest('.month-nav-btn')) {
      onChangeDateHandler(e.target.id);
    } else if (e.target.closest('.type-btn')) {
      onSelectTypeHandler(e.target.classList);
    } else if (e.target.closest('.submit-btn')) {
      onSubmitHandler();
    } else if (e.target.closest('.login-btn')) {
      onLoginHandler();
    } else if (e.target.closest('.get-btn')) {
      onGetHandler();
    } else if (e.target.closest('.signout')) {
      onSignOutHandler();
    }
  });
};

export default onEventHandler;

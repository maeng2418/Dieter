import MainPage from 'pages/main';
import CalendarPage from 'pages/calendar';
import GraphPage from 'pages/graph';
import { Option } from 'tags';
import { DateList, KcalList } from 'components';
import { getState, setState, setEvent } from '../store';

// 네이비게이션 이벤트 핸들러
const onNavEventHandler = (page) => {
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

const onSubmitHandler = () => {
  const type = document.querySelector('.isSelected').id;
  const category = document.querySelector('.category').value;
  const date = document.querySelector('.date-picker').value;
  const content = document.querySelector('.input-content').value;
  const kcal = document.querySelector('.input-kcal').value;

  const $dateList = document.getElementById(date);
  if ($dateList) {
    $dateList.innerHTML += KcalList([content, kcal], { type: type });
  } else {
    const $mainPage = document.querySelector('.main-page');
    $mainPage.innerHTML += DateList([], { type, category, date, content, kcal });
  }
};

const onEventHandler = () => {
  document.getElementById('root').addEventListener('click', async (e) => {
    if (e.target.closest(`.nav-btn`)) {
      e.preventDefault();
      onNavEventHandler(e.target.id);
    } else if (e.target.closest('.month-nav-btn')) {
      e.preventDefault();
      onChangeDateHandler(e.target.id);
    } else if (e.target.closest('.type-btn')) {
      e.preventDefault();
      onSelectTypeHandler(e.target.classList);
    } else if (e.target.closest('.submit-btn')) {
      e.preventDefault();
      onSubmitHandler();
    }
  });
};

export default onEventHandler;

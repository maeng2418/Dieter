import { Div } from 'tags';
import { CalendarBody } from './CalendarBody';
import { CalendarWeek } from './CalendarWeek';
import { CalendarDate } from './CalendarDate';
import { getState } from '../../store';

export const Calendar = (children = [], props = {}) => {
  const year = getState('date').getFullYear();
  const month = getState('date').getMonth() + 1;
  return Div([CalendarBody([createCalendar(year, month)])], {
    ...props,
    class: `calendar ${props.class && props.class}`,
    style: `${Style} ${props.style && props.style}`,
  });
};

const Style = `
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const createCalendar = (year, month) => {
  const date = new Date(year, month - 1, 1); // 날짜 세팅 (연도, 월, 1일)
  const firstDay = date.getDay(); // 해당 월의 첫번째 요일 데이터
  const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); // 해당 월의 마지막 일자 데이터
  const prevLastDate = new Date(date.getFullYear(), date.getMonth(), 0).getDate(); // 이전 달의 마지막 일자 데이터

  let startDayCount = 1;
  let lastDayCount = 1;

  const weekList = [];

  const en_days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

  // 5줄 반복
  for (let i = 0; i < 5; i++) {
    const dayList = [];
    // 1주일 단위 데이터 생성
    for (let j = 0; j < 7; j++) {
      // i == 0: 1주차
      // j < firstDay: 해당 월 시작 요일 이전 일 때
      if (i === 0 && j < firstDay) {
        dayList.push(
          // 이전달 마지막 일자 - (해당 월의 시작 요일 - 1) + 카운트
          CalendarDate([`${prevLastDate - (firstDay - 1) + j}`], {
            class: `past ${en_days[j]}`,
            style: 'color: gray',
          })
        );
        // 해당 월 일자
      } else if (i >= 0 && startDayCount <= lastDate) {
        dayList.push(
          CalendarDate([`${startDayCount}`], {
            class: `${en_days[j]}`,
            style: `color: ${(en_days[j] === 'sun' && 'red') || (en_days[j] === 'sat' && 'blue')}`,
          })
        );
        startDayCount += 1;
        // 다음 달 일자
      } else if (startDayCount > lastDate) {
        dayList.push(
          CalendarDate([`${lastDayCount}`], {
            class: `future ${en_days[j]}`,
            style: 'color: gray',
          })
        );
        lastDayCount += 1;
      }
    }
    weekList.push(dayList.join(''));
  }
  return weekList.map((week) => CalendarWeek([week])).join('');
};

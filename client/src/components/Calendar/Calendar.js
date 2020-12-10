import { Div, Img } from 'tags';
import { CalendarBody } from './CalendarBody';
import { CalendarWeek } from './CalendarWeek';
import { CalendarDate } from './CalendarDate';
import { getState, getDate } from '../../store';
import { getFormatDate } from 'utils/date-format';
import { dateDescending } from 'utils/date-sorting';
import NormalEmoji from 'images/normal.svg';
import ObesityEmoji from 'images/obesity.svg';
import OverEmoji from 'images/over.svg';
import UnderEmoji from 'images/under.svg';

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
  margin: 3rem auto;
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

  const dayKcalData = getDayKcal();

  // 5줄 반복
  for (let i = 0; i < 5; i++) {
    const dayList = [];
    // 1주일 단위 데이터 생성
    for (let j = 0; j < 7; j++) {
      // i == 0: 1주차
      // j < firstDay: 해당 월 시작 요일 이전 일 때
      if (i === 0 && j < firstDay) {
        const id = getFormatDate(
          new Date(date.getFullYear(), date.getMonth() - 1, prevLastDate - (firstDay - 1) + j)
        );
        const Emoji = dayKcalData[id] ? getEmoji(dayKcalData[id]) : '';

        dayList.push(
          // 이전달 마지막 일자 - (해당 월의 시작 요일 - 1) + 카운트
          CalendarDate([`${prevLastDate - (firstDay - 1) + j}`, Emoji], {
            class: `past ${en_days[j]}`,
            id: getFormatDate(
              new Date(date.getFullYear(), date.getMonth() - 1, prevLastDate - (firstDay - 1) + j)
            ),
            style: 'color: gray',
          })
        );
        // 해당 월 일자
      } else if (i >= 0 && startDayCount <= lastDate) {
        const id = getFormatDate(new Date(year, month - 1, startDayCount));
        const Emoji = dayKcalData[id] ? getEmoji(dayKcalData[id]) : '';
        dayList.push(
          CalendarDate([`${startDayCount}`, Emoji], {
            class: `${en_days[j]}`,
            id: getFormatDate(new Date(year, month - 1, startDayCount)),
            style: `color: ${(en_days[j] === 'sun' && 'red') || (en_days[j] === 'sat' && 'blue')}`,
          })
        );
        startDayCount += 1;
        // 다음 달 일자
      } else if (startDayCount > lastDate) {
        const id = getFormatDate(new Date(date.getFullYear(), date.getMonth() + 1, lastDayCount));
        const Emoji = dayKcalData[id] ? getEmoji(dayKcalData[id]) : '';
        dayList.push(
          CalendarDate([`${lastDayCount}`, Emoji], {
            class: `future ${en_days[j]}`,
            id: getFormatDate(new Date(date.getFullYear(), date.getMonth() + 1, lastDayCount)),
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

const getDayKcal = () => {
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

const getEmoji = (kcal) => {
  let Emoji = UnderEmoji;
  if (kcal >= 3500) Emoji = ObesityEmoji;
  if (kcal > 2500) Emoji = OverEmoji;
  if (kcal > 2000) Emoji = NormalEmoji;
  return Div([Img([], { src: Emoji, style: EmojiStyle })], { style: EmojiContainerStyle });
};

const EmojiStyle = `
  width: 80%;
`;

const EmojiContainerStyle = `
  display: flex;
  justify-content: center;
`;

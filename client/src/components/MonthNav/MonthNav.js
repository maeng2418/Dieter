import { Div, Button } from 'tags';
import { getState } from 'store';

export const MonthNav = (children = [], props = {}) => {
  const year = getState('date').getFullYear();
  const month = getState('date').getMonth() + 1;
  return Div(
    [
      Button(['<'], {
        id: 'prev-btn',
        class: 'month-nav-btn',
        style: `background: none; border: none; font-size: 2rem; outline: none; cursor: pointer;`,
        onmouseover: "this.style.color='#fa541c'",
        onmouseout: "this.style.color='black'",
      }),
      Div([`${year}년 ${month}월`], {
        class: 'current-year-month',
        style: 'margin: 0 3rem; font-size: 1.5rem; font-weight: 600; line-height: 2;',
      }),
      Button(['>'], {
        id: 'next-btn',
        class: 'month-nav-btn',
        style: `background: none; border: none; font-size: 2rem; outline: none; cursor: pointer;`,
        onmouseover: "this.style.color='#fa541c'",
        onmouseout: "this.style.color='black'",
      }),
    ],
    {
      ...props,
      class: `month-nav ${props.class && props.class}`,
      style: `${Style} ${props.style && props.style}`,
    }
  );
};

const Style = `
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

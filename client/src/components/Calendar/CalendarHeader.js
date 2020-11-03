import { Div, Button } from 'tags';

export const CalendarHeader = (children = [], props = {}) => {
  return Div(
    [
      Button(['<'], {
        class: 'prev-btn',
        style: `background: none; border: none; font-size: 2rem; outline: none;`,
        onmouseover: "this.style.color='#fa541c'",
        onmouseout: "this.style.color='black'",
      }),
      Div([...children], {
        class: 'current-year-month',
        style: 'margin: 0 3rem; font-size: 1.5rem; font-weight: 600; line-height: 2;',
      }),
      Button(['>'], {
        class: 'next-btn',
        style: `background: none; border: none; font-size: 2rem; outline: none;`,
        onmouseover: "this.style.color='#fa541c'",
        onmouseout: "this.style.color='black'",
      }),
    ],
    {
      ...props,
      class: `calendar-header ${props.class && props.class}`,
      style: `${Style} ${props.style && props.style}`,
    }
  );
};

const Style = `
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;
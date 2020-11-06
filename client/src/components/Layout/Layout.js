import { Div } from 'tags';
import { Header, MonthNav, Navigator, NavButton } from 'components';

export const Layout = (children = [], props = {}) => {
  return Div(
    [
      Header(['다이어터']),
      MonthNav(),
      Navigator([
        NavButton(['내역'], { id: 'main' }),
        NavButton(['달력'], { id: 'calendar' }),
        NavButton(['통계'], { id: 'graph' }),
      ]),
      Div(children, { class: 'content' }),
    ],
    {
      ...props,
      class: `app ${props.class && props.class}`,
      style: `${Style} ${props.style && props.style}`,
    }
  );
};

const Style = `
`;

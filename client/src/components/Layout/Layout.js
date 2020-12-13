import { Div } from 'tags';
import { Header, MonthNav, Navigator, NavButton } from 'components';

export const Layout = (children = [], props = {}) => {
  // 쿠키 체크해서 없으면 로그인으로 라우팅
  const cookieValue = document.cookie.match('(^|;) ?authorization=([^;]*)(;|$)');
  if (cookieValue) {
    return (
      cookieValue[2] &&
      Div(
        [
          Header(['다이어터']),
          MonthNav(),
          Navigator([
            NavButton(['내역'], { id: 'main', class: 'selected-page' }),
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
      )
    );
  } else {
    return Div(
      [
        Header(['다이어터']),
        Div(children, {
          class: 'content',
        }),
      ],
      {
        ...props,
        class: `app ${props.class && props.class}`,
        style: `${Style} ${props.style && props.style}`,
      }
    );
  }
};

const Style = `
`;

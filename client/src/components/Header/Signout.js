import { Div } from 'tags';

export const Signout = (children = [], props = {}) => {
  // 쿠키 체크해서 없으면 로그인으로 라우팅
  const cookieValue = document.cookie.match('(^|;) ?authorization=([^;]*)(;|$)');
  if (cookieValue) {
    return (
      cookieValue[2] &&
      Div(children, {
        ...props,
        class: `signout ${props.class && props.class}`,
        style: `${Style} ${props.style && props.style}`,
      })
    );
  } else {
    return '';
  }
};

const Style = `
  position: absolute;
  right: 0;
  margin-right: 2rem;
  font-size: 1.2rem;
`;

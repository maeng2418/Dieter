import { Div, H1 } from 'tags';
import { Signout } from './Signout';

export const Header = (children = [], props = {}) => {
  return Div([H1(children, { class: 'title' }), Signout(['로그아웃'])], {
    ...props,
    class: `header ${props.class && props.class}`,
    style: `${Style} ${props.style && props.style}`,
  });
};

const Style = `
  display: flex;
  position: sticky;
  background: #36cfc9;
  top: 0;
  min-width: 100%;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-bottom: solid 2px #e8e8e8;
  box-shadow: 0 0 3rem #f3f1f1;
`;

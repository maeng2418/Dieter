import { Div } from 'tags';
import { Header } from 'components';

export const Layout = (children = [], props = {}) => {
  return Div([Header(['헤더']), ...children], {
    ...props,
    classname: `app ${props.classname && props.classname}`,
    style: `${Style} ${props.style && props.style}`,
  });
};

const Style = `
`;

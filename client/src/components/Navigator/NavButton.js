import { Button } from 'tags';

export const NavButton = (children = [], props = {}) => {
  return Button(children, {
    ...props,
    class: `nav-btn ${props.class && props.class}`,
    style: `${Style} ${
      props.class && props.class === 'selected-page' ? SelectedStyle : UnselectedStyle
    } ${props.style && props.style}`,
  });
};

const Style = `
  cursor: pointer;
  text-align: center;
  width: 20%;
  border: 3px solid #36cfc9;
  outline: none;
  padding: 5px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 1rem;
`;

const UnselectedStyle = `
  background: #36cfc9;
  color: #fff;
`;

const SelectedStyle = `
  background: #fff;
  color: #36cfc9;
`;

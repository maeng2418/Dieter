const Div = (children = [], props = {}) => {
  let strProps = '';
  for (let key in props) {
    strProps += `${key}="${props[key]}" `;
  }
  return `
    <div ${strProps}>
      ${children.reduce((acc, child) => (acc += child), ``)}
    </div>
  `;
};

export default Div;

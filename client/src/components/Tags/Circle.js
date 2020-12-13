const Circle = (children = [], props = {}) => {
  let strProps = '';
  for (let key in props) {
    strProps += `${key}="${props[key]}" `;
  }
  return `
    <circle ${strProps}>
      ${children.reduce((acc, child) => (acc += child), ``)}
    </circle>
  `;
};

export default Circle;

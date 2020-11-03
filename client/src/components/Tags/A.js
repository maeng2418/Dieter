const A = (children = [], props = {}) => {
  let strProps = '';
  for (let key in props) {
    strProps += `${key}="${props[key]}" `;
  }
  return `
    <a ${strProps}>
      ${children.reduce((acc, child) => (acc += child), ``)}
    </a>
  `;
};

export default A;

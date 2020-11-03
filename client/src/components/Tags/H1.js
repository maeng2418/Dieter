const H1 = (children = [], props = {}) => {
  let strProps = '';
  for (let key in props) {
    strProps += `${key}="${props[key]}" `;
  }
  return `
    <h1 ${strProps}>
      ${children.reduce((acc, child) => (acc += child), ``)}
    </h1>
  `;
};

export default H1;

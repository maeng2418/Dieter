const Line = (children = [], props = {}) => {
  let strProps = '';
  for (let key in props) {
    strProps += `${key}="${props[key]}" `;
  }
  return `
    <line ${strProps}>
      ${children.reduce((acc, child) => (acc += child), ``)}
    </line>
  `;
};

export default Line;

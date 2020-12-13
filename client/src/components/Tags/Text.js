const Text = (children = [], props = {}) => {
  let strProps = '';
  for (let key in props) {
    strProps += `${key}="${props[key]}" `;
  }
  return `
    <text ${strProps}>
      ${children.reduce((acc, child) => (acc += child), ``)}
    </text>
  `;
};

export default Text;
